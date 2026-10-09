import { useState, type CSSProperties } from "react";
import { assets, type AssetKey } from "../config/assets";
export function AssetSlot({
  name,
  className = "",
  complete = false,
  eager = false,
}: {
  name: AssetKey;
  className?: string;
  complete?: boolean;
  eager?: boolean;
}) {
  const asset = assets[name];
  const [failedSource, setFailedSource] = useState<string | null>(null);
  const available = asset.src && failedSource !== asset.src;
  return (
    <div
      className={`asset-slot ${className} ${complete ? "asset-complete" : ""}`}
      data-asset={name}
      style={
        {
          "--asset-ratio": `${asset.width} / ${asset.height}`,
          "--asset-position": asset.position,
        } as CSSProperties
      }
    >
      {available ? (
        <img
          src={asset.src!}
          alt={asset.alt}
          width={asset.width}
          height={asset.height}
          loading={eager ? "eager" : "lazy"}
          fetchPriority={eager ? "high" : "auto"}
          onError={() => setFailedSource(asset.src)}
        />
      ) : (
        <div
          className="asset-placeholder"
          role="img"
          aria-label={`${asset.alt}; final ${name === "portrait" ? "photograph" : "image"} pending`}
        >
          <span className="placeholder-cross" aria-hidden="true" />
          <span>
            {name === "portrait"
              ? "Portrait"
              : name === "hero"
                ? "Featured visual"
                : "Project image"}
            <small>
              {asset.src ? "Image unavailable" : "Final image to come"}
            </small>
          </span>
        </div>
      )}
    </div>
  );
}
