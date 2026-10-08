// Read-only component capture harness. Never mounts Quad's protected routes or connects to its backend.
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
const source = path
  .resolve(process.argv[2] || "../quad/frontend")
  .replaceAll("\\", "/");
const { createServer } = await import(
  pathToFileURL(`${source}/node_modules/vite/dist/node/index.js`).href
);
const { default: react } = await import(
  pathToFileURL(`${source}/node_modules/@vitejs/plugin-react/dist/index.js`)
    .href
);
const root = fileURLToPath(new URL("../tmp/quad-preview/", import.meta.url));
await fs.mkdir(root, { recursive: true });
await fs.writeFile(
  `${root}/.env`,
  "VITE_API_BASE_URL=http://127.0.0.1:4176/demo-api\nVITE_SOCKET_URL=http://127.0.0.1:4176\nVITE_CLERK_PUBLISHABLE_KEY=component-preview-no-authentication\n",
);
const cssFile = (await fs.readdir(`${source}/dist/assets`)).find((name) =>
  name.endsWith(".css"),
);
await fs.copyFile(`${source}/dist/assets/${cssFile}`, `${root}/quad.css`);
await fs.writeFile(
  `${root}/index.html`,
  '<html><head><meta name="viewport" content="width=device-width,initial-scale=1"><link rel="stylesheet" href="/quad.css"></head><body><div id="root"></div><script type="module" src="/main.tsx"></script></body></html>',
);
await fs.writeFile(
  `${root}/main.tsx`,
  `
import React from 'react';
import {createRoot} from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';
import {Sidebar} from '${source}/src/components/layout/Sidebar.tsx';
import {FeedHeaderTabs} from '${source}/src/pages/app/feed/FeedHeaderTabs.tsx';
import {FeedPostComposer} from '${source}/src/pages/app/feed/FeedPostComposer.tsx';
import {PostCard} from '${source}/src/components/posts/PostCard.tsx';
import {PollCard} from '${source}/src/components/polls/PollCard.tsx';
import {useAuthStore} from '${source}/src/stores/authStore.ts';
// Synthetic fixtures are local presentation props, never authentication credentials.
const author={clerkId:'demo-only',username:'campus_demo',email:'demo@example.test',firstName:'Campus',lastName:'Demo',profileImage:'/logo.png',bio:'Safe demonstration content'};
useAuthStore.setState({user:{...author,_id:'demo',createdAt:new Date().toISOString(),updatedAt:new Date().toISOString()},isLoading:false});
const now=new Date().toISOString();
const post={_id:'demo-post',userId:'demo',author,text:'A place for campus conversations.\\n\\nShare an idea, find your community, and keep the conversation going. This is safe demonstration content for the portfolio capture — no live users or private messages.',media:[],reactionsCount:0,commentsCount:0,createdAt:now,updatedAt:now};
const post2={...post,_id:'demo-post-2',text:'What are you working on this week?\\n\\nFrom a new project to a study group, there is always something worth sharing. Demo content only.'};
const poll={id:'demo-poll',author,question:'Where should our next study session be? (Demo)',options:[{index:0,text:'Library',votesCount:0},{index:1,text:'Campus café',votesCount:0},{index:2,text:'Outdoor courtyard',votesCount:0}],settings:{anonymousVoting:false},status:'active',canViewResults:true,totalVotes:0,reactionsCount:0,createdAt:now,updatedAt:now,expiresAt:new Date(Date.now()+86400000*3).toISOString()};
const dark=!location.search.includes('light');document.documentElement.classList.toggle('dark',dark);
function App(){const [tab,setTab]=React.useState(location.search.includes('poll')?'polls':'home');return <BrowserRouter><div className="min-h-screen bg-background"><div className="hidden lg:flex lg:w-64 lg:flex-col lg:fixed lg:inset-y-0"><Sidebar/></div><main className="lg:pl-64"><div className="max-w-4xl mx-auto px-3 py-4 sm:px-6 sm:py-8 space-y-6"><FeedHeaderTabs feedType="foryou" tab={tab} onTabChange={setTab} onFeedTypeChange={()=>{}}/><FeedPostComposer disabled onCreatePost={async()=>{}}/>{tab==='polls'?<PollCard poll={poll}/>:<><PostCard post={post}/><PollCard poll={poll}/><PostCard post={post2}/></>}<p style={{fontSize:12,opacity:.65}}>Component preview · Safe demo data · No live session</p></div></main></div></BrowserRouter>}
createRoot(document.getElementById('root')).render(<App/>);
`,
);
const server = await createServer({
  configFile: false,
  root,
  publicDir: `${source}/public`,
  plugins: [react()],
  resolve: {
    alias: {
      "@": `${source}/src`,
      react: `${source}/node_modules/react`,
      "react-dom": `${source}/node_modules/react-dom`,
      "react-router-dom": `${source}/node_modules/react-router-dom`,
    },
  },
  server: {
    port: 4176,
    strictPort: true,
    host: "0.0.0.0",
    fs: { allow: [source, root] },
  },
});
server.middlewares.use("/demo-api", (_request, response) => {
  response.setHeader("Content-Type", "application/json");
  response.end(
    JSON.stringify({
      success: true,
      data: { bookmarked: false, totalCount: 0, userReaction: null },
    }),
  );
});
await server.listen();
console.log("Read-only Quad component capture preview: http://127.0.0.1:4176");
