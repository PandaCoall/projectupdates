import{a as e,c as t,d as n,i as r,l as i,n as a,o,s,t as c,u as l}from"./index-CeLbJukA.js";function u(e){if(Array.isArray(e))return e.flatMap(e=>u(e));if(typeof e!=`string`)return[];let t=[],n=0,r,i,a,o,s,c=()=>{for(;n<e.length&&/\s/.test(e.charAt(n));)n+=1;return n<e.length},l=()=>(i=e.charAt(n),i!==`=`&&i!==`;`&&i!==`,`);for(;n<e.length;){for(r=n,s=!1;c();)if(i=e.charAt(n),i===`,`){for(a=n,n+=1,c(),o=n;n<e.length&&l();)n+=1;n<e.length&&e.charAt(n)===`=`?(s=!0,n=o,t.push(e.slice(r,a)),r=n):n=a+1}else n+=1;(!s||n>=e.length)&&t.push(e.slice(r))}return t}function d(e){return e instanceof Headers?e:Array.isArray(e)||typeof e==`object`?new Headers(e):null}function f(...e){return e.reduce((e,t)=>{let n=d(t);if(!n)return e;for(let[t,r]of n.entries())t===`set-cookie`?u(r).forEach(t=>e.append(`set-cookie`,t)):e.set(t,r);return e},new Headers)}var p=c(`calendar`,[[`path`,{d:`M8 2v4`,key:`1cmpym`}],[`path`,{d:`M16 2v4`,key:`4m81vk`}],[`rect`,{width:`18`,height:`18`,x:`3`,y:`4`,rx:`2`,key:`1hopcy`}],[`path`,{d:`M3 10h18`,key:`8toen8`}]]),m=c(`circle-check`,[[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}],[`path`,{d:`m9 12 2 2 4-4`,key:`dzmm74`}]]),h=c(`circle-dashed`,[[`path`,{d:`M10.1 2.182a10 10 0 0 1 3.8 0`,key:`5ilxe3`}],[`path`,{d:`M13.9 21.818a10 10 0 0 1-3.8 0`,key:`11zvb9`}],[`path`,{d:`M17.609 3.721a10 10 0 0 1 2.69 2.7`,key:`1iw5b2`}],[`path`,{d:`M2.182 13.9a10 10 0 0 1 0-3.8`,key:`c0bmvh`}],[`path`,{d:`M20.279 17.609a10 10 0 0 1-2.7 2.69`,key:`1ruxm7`}],[`path`,{d:`M21.818 10.1a10 10 0 0 1 0 3.8`,key:`qkgqxc`}],[`path`,{d:`M3.721 6.391a10 10 0 0 1 2.7-2.69`,key:`1mcia2`}],[`path`,{d:`M6.391 20.279a10 10 0 0 1-2.69-2.7`,key:`1fvljs`}]]),g=c(`circle`,[[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}]]),ee=c(`download`,[[`path`,{d:`M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4`,key:`ih7n3h`}],[`polyline`,{points:`7 10 12 15 17 10`,key:`2ggqvy`}],[`line`,{x1:`12`,x2:`12`,y1:`15`,y2:`3`,key:`1vk2je`}]]),_=c(`octagon-alert`,[[`path`,{d:`M12 16h.01`,key:`1drbdi`}],[`path`,{d:`M12 8v4`,key:`1got3b`}],[`path`,{d:`M15.312 2a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586l-4.688-4.688A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2z`,key:`1fd625`}]]),v=c(`plus`,[[`path`,{d:`M5 12h14`,key:`1ays0h`}],[`path`,{d:`M12 5v14`,key:`s699le`}]]),y=c(`rotate-ccw`,[[`path`,{d:`M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8`,key:`1357e3`}],[`path`,{d:`M3 3v5h5`,key:`1xhq8a`}]]),b=c(`search`,[[`path`,{d:`m21 21-4.34-4.34`,key:`14j7rj`}],[`circle`,{cx:`11`,cy:`11`,r:`8`,key:`4ej97u`}]]),x=c(`trash-2`,[[`path`,{d:`M3 6h18`,key:`d0wm0j`}],[`path`,{d:`M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6`,key:`4alrt4`}],[`path`,{d:`M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2`,key:`v07s0e`}],[`line`,{x1:`10`,x2:`10`,y1:`11`,y2:`17`,key:`1uufr5`}],[`line`,{x1:`14`,x2:`14`,y1:`11`,y2:`17`,key:`xtxkd`}]]),te=c(`upload`,[[`path`,{d:`M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4`,key:`ih7n3h`}],[`polyline`,{points:`17 8 12 3 7 8`,key:`t8dd8p`}],[`line`,{x1:`12`,x2:`12`,y1:`3`,y2:`15`,key:`widbto`}]]),S=n(l(),1),C=[{id:`human`,label:`Human approval`},{id:`ai`,label:`AI-driven`},{id:`deterministic`,label:`Deterministic`},{id:`async`,label:`Background`},{id:`external`,label:`External provider`}],w=[{key:`repeatability`,label:`Repeatable recipes`},{key:`api`,label:`Headless / API call from Hyrax`},{key:`queue`,label:`Queue large job volumes`},{key:`versioning`,label:`Version the workflows`},{key:`scale`,label:`Scale workers independently`},{key:`swap`,label:`Swap a model without redesigning Hyrax`}];function T(){return crypto.randomUUID()}function E(e=``){return{id:T(),text:e}}function D(e,t,n){return{id:T(),name:e,evidence:t,owner:n}}function O(){return[D(`Working pilot path`,`A complete job runs in the deployed environment and produces the agreed editor handoff`,`Mary with engineering support`),D(`Recipe and provider decision`,`Versioned inputs, results, failures, cost and editor assessment from the bounded comparison`,`Mary and senior engineer`),D(`Retained asset library`,`Approved segments can be found and used; unapproved or restricted ranges cannot be rendered`,`Mary; editor owns usability approval`),D(`Review and approval path`,`A correction creates a new version; acceptance and release decisions remain distinct`,`Editors and release owner`),D(`Specification and operating guide`,`Data contracts, deployment, recovery, access and known limitations documented`,`Mary and senior engineer`),D(`Measurement report`,`Matched baseline and pilot timings, accepted outcomes, cost and failure analysis`,`Mary and lead editor`)]}var k=()=>({floyo:``,comfy:``,hosted:``});function A(){return{sow:{building:``,inScope:[E()],outOfScope:[E()],deliverables:O(),path:[E(`UGC / presenter`),E(`B-roll`),E(`Captions`),E(`Voice / audio`),E(`Music / sound`),E(`CTA / end frame`),E(`Assembled first cut`)],acceptance:``,flags:[{id:T(),concern:``,alternative:``}]},flow:[`Campaign / product rules`,`Job creation and budget`,`Asset retrieval or generation`,`Private storage and rights`,`Analysis and search`,`Creative Manifest`,`Deterministic render`,`QA checks`,`Editor review`,`Named approval`].map(e=>({id:T(),title:e,kind:`deterministic`,detail:``})),requirements:[{id:T(),item:``,from:`Hyrax`,stage:`Before build`,blocker:!1,notes:``}],generation:{recommendation:``,repeatability:k(),api:k(),queue:k(),versioning:k(),scale:k(),swap:k()}}}function j(e){let t=e.answers??A(),n=t.sow.deliverables,r=n.every(e=>typeof e.name==`string`)?n:n.some(e=>e.text)?n.map(e=>({id:e.id,name:e.text??``,evidence:e.evidence??``,owner:e.owner??``})):O();return{...e,answers:{...t,sow:{...t.sow,deliverables:r}}}}var M=r();function N(){return crypto.randomUUID()}function ne({answers:e,onChange:t}){let n=e.sow;function r(r){t({...e,sow:{...n,...r}})}return(0,M.jsxs)(`main`,{className:`mx-auto max-w-5xl space-y-8 px-4 py-6`,children:[(0,M.jsx)(`p`,{className:`text-sm text-muted`,children:`Write the October answers here in the shape they need to be delivered. The technical specification and the development pipeline are not in this tracker.`}),(0,M.jsxs)(I,{kicker:`Goal 1`,title:`Scope of work`,children:[(0,M.jsx)(L,{text:`What we are building`,children:(0,M.jsx)(`textarea`,{className:`field min-h-28`,value:n.building,onChange:e=>r({building:e.target.value}),placeholder:`One short statement of the October product.`})}),(0,M.jsx)(z,{label:`In scope`,items:n.inScope,onChange:e=>r({inScope:e}),placeholder:`One in-scope item`}),(0,M.jsx)(z,{label:`Out of scope`,items:n.outOfScope,onChange:e=>r({outOfScope:e}),placeholder:`One out-of-scope item`}),(0,M.jsx)(R,{rows:n.deliverables,onChange:e=>r({deliverables:e})}),(0,M.jsx)(z,{label:`Basic path that must exist in the first cut`,items:n.path,onChange:e=>r({path:e}),placeholder:`Path item`}),(0,M.jsx)(L,{text:`Editor acceptance bar`,children:(0,M.jsx)(`textarea`,{className:`field min-h-24`,value:n.acceptance,onChange:e=>r({acceptance:e.target.value}),placeholder:`What has to be true for an editor to prefer this first cut over a blank timeline.`})}),(0,M.jsxs)(`div`,{children:[(0,M.jsx)(`p`,{className:`mb-2 text-sm text-muted`,children:`Flags and simpler alternatives`}),(0,M.jsx)(`ul`,{className:`space-y-2`,children:n.flags.map(e=>(0,M.jsxs)(`li`,{className:`grid gap-2 rounded-xl border border-border bg-surface p-3 sm:grid-cols-[1fr_1fr_auto]`,children:[(0,M.jsx)(`input`,{className:`field`,value:e.concern,placeholder:`What looks unrealistic or unnecessary`,onChange:t=>r({flags:n.flags.map(n=>n.id===e.id?{...n,concern:t.target.value}:n)})}),(0,M.jsx)(`input`,{className:`field`,value:e.alternative,placeholder:`Simpler alternative`,onChange:t=>r({flags:n.flags.map(n=>n.id===e.id?{...n,alternative:t.target.value}:n)})}),(0,M.jsx)(`button`,{type:`button`,"aria-label":`Remove flag`,className:`min-h-11 text-alert`,onClick:()=>r({flags:n.flags.filter(t=>t.id!==e.id)}),children:(0,M.jsx)(x,{size:16})})]},e.id))}),(0,M.jsxs)(`button`,{type:`button`,className:`mt-2 inline-flex min-h-11 items-center gap-1 text-sm text-primary`,onClick:()=>r({flags:[...n.flags,{id:N(),concern:``,alternative:``}]}),children:[(0,M.jsx)(v,{size:14}),` Flag`]})]})]}),(0,M.jsxs)(I,{kicker:`Goal 2`,title:`Process flowchart`,children:[(0,M.jsx)(`p`,{className:`text-sm text-muted`,children:`Each box is a hand-off. Mark whether it is a person, an AI proposal, deterministic software, background work, or an outside provider.`}),(0,M.jsx)(`ol`,{className:`relative space-y-0 border-l border-border pl-4`,children:e.flow.map((n,r)=>(0,M.jsxs)(`li`,{className:`relative pb-4`,children:[(0,M.jsx)(`span`,{className:`absolute top-4 -left-[1.3rem] size-2.5 rounded-full bg-primary`}),(0,M.jsxs)(`div`,{className:`rounded-xl border border-border bg-surface p-3`,children:[(0,M.jsxs)(`div`,{className:`mb-2 flex flex-wrap items-center gap-2`,children:[(0,M.jsx)(`span`,{className:`font-mono text-xs text-muted`,children:String(r).padStart(2,`0`)}),(0,M.jsx)(`input`,{className:`field min-w-40 flex-1`,value:n.title,onChange:r=>P(e,t,n.id,{title:r.target.value})}),(0,M.jsx)(`select`,{className:`field w-auto`,value:n.kind,"aria-label":`Step type`,onChange:r=>P(e,t,n.id,{kind:r.target.value}),children:C.map(e=>(0,M.jsx)(`option`,{value:e.id,children:e.label},e.id))}),(0,M.jsx)(`button`,{type:`button`,"aria-label":`Remove step`,className:`min-h-11 px-2 text-alert`,onClick:()=>t({...e,flow:e.flow.filter(e=>e.id!==n.id)}),children:(0,M.jsx)(x,{size:16})})]}),(0,M.jsx)(`textarea`,{className:`field min-h-16`,value:n.detail,placeholder:`What happens, what is handed on, and where it can stop.`,onChange:r=>P(e,t,n.id,{detail:r.target.value})})]})]},n.id))}),(0,M.jsxs)(`button`,{type:`button`,className:`inline-flex min-h-11 items-center gap-1 text-sm text-primary`,onClick:()=>t({...e,flow:[...e.flow,{id:N(),title:``,kind:`deterministic`,detail:``}]}),children:[(0,M.jsx)(v,{size:14}),` Step`]})]}),(0,M.jsxs)(I,{kicker:`Goal 4`,title:`Requirements and dependencies`,children:[(0,M.jsx)(`p`,{className:`text-sm text-muted`,children:`One row per thing you need. Say who provides it, which stage needs it, and whether work actually stops without it.`}),(0,M.jsx)(`ul`,{className:`space-y-3`,children:e.requirements.map(n=>(0,M.jsx)(`li`,{className:`rounded-xl border border-border bg-surface p-3`,children:(0,M.jsxs)(`div`,{className:`grid gap-2 sm:grid-cols-2`,children:[(0,M.jsx)(`input`,{className:`field sm:col-span-2`,value:n.item,placeholder:`Account, asset, decision, or access`,onChange:r=>F(e,t,n.id,{item:r.target.value})}),(0,M.jsxs)(`select`,{className:`field`,value:n.from,"aria-label":`Provided by`,onChange:r=>F(e,t,n.id,{from:r.target.value}),children:[(0,M.jsx)(`option`,{value:`Hyrax`,children:`From Hyrax`}),(0,M.jsx)(`option`,{value:`Mary`,children:`From Mary`}),(0,M.jsx)(`option`,{value:`Both`,children:`Both`})]}),(0,M.jsx)(`input`,{className:`field`,value:n.stage,placeholder:`Stage that needs it`,onChange:r=>F(e,t,n.id,{stage:r.target.value})}),(0,M.jsxs)(`label`,{className:`flex min-h-11 items-center gap-2 text-sm`,children:[(0,M.jsx)(`input`,{type:`checkbox`,checked:n.blocker,onChange:r=>F(e,t,n.id,{blocker:r.target.checked})}),`Hard blocker`]}),(0,M.jsx)(`button`,{type:`button`,className:`min-h-11 text-left text-sm text-alert`,onClick:()=>t({...e,requirements:e.requirements.filter(e=>e.id!==n.id)}),children:`Remove`}),(0,M.jsx)(`textarea`,{className:`field min-h-16 sm:col-span-2`,value:n.notes,placeholder:`Notes`,onChange:r=>F(e,t,n.id,{notes:r.target.value})})]})},n.id))}),(0,M.jsxs)(`button`,{type:`button`,className:`inline-flex min-h-11 items-center gap-1 text-sm text-primary`,onClick:()=>t({...e,requirements:[...e.requirements,{id:N(),item:``,from:`Hyrax`,stage:``,blocker:!1,notes:``}]}),children:[(0,M.jsx)(v,{size:14}),` Requirement`]})]}),(0,M.jsxs)(I,{kicker:`Goal 5`,title:`Generation layer`,children:[(0,M.jsx)(`p`,{className:`text-sm text-muted`,children:`Floyo, self-hosted ComfyUI, or a hosted API as the recipe layer under Hyrax. The gated build pipeline is not tracked here.`}),(0,M.jsx)(`div`,{className:`overflow-x-auto rounded-xl border border-border`,children:(0,M.jsxs)(`table`,{className:`w-full min-w-[40rem] border-collapse text-sm`,children:[(0,M.jsx)(`thead`,{children:(0,M.jsxs)(`tr`,{className:`border-b border-border bg-surface text-left text-muted`,children:[(0,M.jsx)(`th`,{className:`p-3 font-medium`,children:`Question`}),(0,M.jsx)(`th`,{className:`p-3 font-medium`,children:`Floyo`}),(0,M.jsx)(`th`,{className:`p-3 font-medium`,children:`Self-hosted ComfyUI`}),(0,M.jsx)(`th`,{className:`p-3 font-medium`,children:`Hosted API`})]})}),(0,M.jsx)(`tbody`,{children:w.map(n=>{let r=e.generation[n.key];return typeof r==`string`?null:(0,M.jsxs)(`tr`,{className:`border-b border-border align-top`,children:[(0,M.jsx)(`th`,{className:`p-3 text-left font-medium`,children:n.label}),[`floyo`,`comfy`,`hosted`].map(i=>(0,M.jsx)(`td`,{className:`p-2`,children:(0,M.jsx)(`textarea`,{className:`field min-h-20`,value:r[i],onChange:a=>t({...e,generation:{...e.generation,[n.key]:{...r,[i]:a.target.value}}})})},i))]},n.key)})})]})}),(0,M.jsx)(L,{text:`Recommendation`,children:(0,M.jsx)(`textarea`,{className:`field min-h-28`,value:e.generation.recommendation,placeholder:`The simplest option that is repeatable now and can scale or swap later.`,onChange:n=>t({...e,generation:{...e.generation,recommendation:n.target.value}})})})]})]})}function P(e,t,n,r){t({...e,flow:e.flow.map(e=>e.id===n?{...e,...r}:e)})}function F(e,t,n,r){t({...e,requirements:e.requirements.map(e=>e.id===n?{...e,...r}:e)})}function I({kicker:e,title:t,children:n}){return(0,M.jsxs)(`section`,{className:`space-y-4`,children:[(0,M.jsxs)(`header`,{children:[(0,M.jsx)(`p`,{className:`font-mono text-xs tracking-widest text-primary uppercase`,children:e}),(0,M.jsx)(`h2`,{className:`text-xl font-semibold`,children:t})]}),n]})}function L({text:e,children:t}){return(0,M.jsxs)(`label`,{className:`block text-sm text-muted`,children:[e,(0,M.jsx)(`div`,{className:`mt-1 text-fg`,children:t})]})}function R({rows:e,onChange:t}){function n(n,r){t(e.map(e=>e.id===n?{...e,...r}:e))}return(0,M.jsxs)(`div`,{children:[(0,M.jsx)(`p`,{className:`mb-2 text-sm font-semibold text-fg`,children:`Deliverables and owners`}),(0,M.jsx)(`div`,{className:`overflow-x-auto rounded-xl border border-border`,children:(0,M.jsxs)(`table`,{className:`w-full min-w-[40rem] border-collapse text-sm`,children:[(0,M.jsx)(`thead`,{children:(0,M.jsxs)(`tr`,{className:`bg-surface-2 text-left`,children:[(0,M.jsx)(`th`,{className:`w-[22%] p-3 font-semibold`,children:`Deliverable`}),(0,M.jsx)(`th`,{className:`p-3 font-semibold`,children:`Acceptance evidence`}),(0,M.jsx)(`th`,{className:`w-[24%] p-3 font-semibold`,children:`Accountable owner`}),(0,M.jsx)(`th`,{className:`w-12 p-3`})]})}),(0,M.jsx)(`tbody`,{children:e.map((r,i)=>(0,M.jsxs)(`tr`,{className:i%2==0?`border-t border-border bg-surface`:`border-t border-border bg-bg`,children:[(0,M.jsx)(`td`,{className:`p-2 align-top`,children:(0,M.jsx)(`textarea`,{className:`field min-h-20`,value:r.name,"aria-label":`Deliverable`,onChange:e=>n(r.id,{name:e.target.value})})}),(0,M.jsx)(`td`,{className:`p-2 align-top`,children:(0,M.jsx)(`textarea`,{className:`field min-h-20`,value:r.evidence,"aria-label":`Acceptance evidence`,onChange:e=>n(r.id,{evidence:e.target.value})})}),(0,M.jsx)(`td`,{className:`p-2 align-top`,children:(0,M.jsx)(`textarea`,{className:`field min-h-20`,value:r.owner,"aria-label":`Accountable owner`,onChange:e=>n(r.id,{owner:e.target.value})})}),(0,M.jsx)(`td`,{className:`p-2 align-top`,children:(0,M.jsx)(`button`,{type:`button`,"aria-label":`Remove deliverable`,className:`min-h-11 px-2 text-alert`,onClick:()=>t(e.filter(e=>e.id!==r.id)),children:(0,M.jsx)(x,{size:16})})})]},r.id))})]})}),(0,M.jsxs)(`button`,{type:`button`,className:`mt-2 inline-flex min-h-11 items-center gap-1 text-sm text-primary`,onClick:()=>t([...e,{id:N(),name:``,evidence:``,owner:``}]),children:[(0,M.jsx)(v,{size:14}),` Deliverable`]})]})}function z({label:e,items:t,onChange:n,placeholder:r}){return(0,M.jsxs)(`div`,{children:[(0,M.jsx)(`p`,{className:`mb-2 text-sm text-muted`,children:e}),(0,M.jsx)(`ul`,{className:`space-y-2`,children:t.map(i=>(0,M.jsxs)(`li`,{className:`flex gap-2`,children:[(0,M.jsx)(`input`,{className:`field`,value:i.text,placeholder:r,onChange:e=>n(t.map(t=>t.id===i.id?{...t,text:e.target.value}:t))}),(0,M.jsx)(`button`,{type:`button`,"aria-label":`Remove ${e}`,className:`min-h-11 px-2 text-alert`,onClick:()=>n(t.filter(e=>e.id!==i.id)),children:(0,M.jsx)(x,{size:16})})]},i.id))}),(0,M.jsxs)(`button`,{type:`button`,className:`mt-2 inline-flex min-h-11 items-center gap-1 text-sm text-primary`,onClick:()=>n([...t,{id:N(),text:``}]),children:[(0,M.jsx)(v,{size:14}),` Add`]})]})}var re=[{name:`Mary`,email:`mary@hyraxteam`,role:`owner`},{name:`Jay`,email:`jeremiahworkpc@gmail.com`,role:`owner`},{name:`Ben`,email:`ben@hyrax.com`,role:`owner`}];function ie(e){let t=e.trim().toLowerCase();return re.find(e=>e.email.toLowerCase()===t)??null}function ae(){return(0,M.jsxs)(`main`,{className:`mx-auto max-w-3xl space-y-4 px-4 py-6`,children:[(0,M.jsxs)(`header`,{children:[(0,M.jsx)(`p`,{className:`font-mono text-xs tracking-widest text-primary uppercase`,children:`Team`}),(0,M.jsx)(`h2`,{className:`text-xl font-semibold`,children:`Fixed team`}),(0,M.jsx)(`p`,{className:`mt-2 text-sm leading-relaxed text-muted`,children:`These emails are set in the app. Opening the link asks for an email. A match can comment and add answers under that name. A member cannot change the board. This is not a public sign-up and it does not use Google.`})]}),(0,M.jsx)(`ul`,{className:`divide-y divide-border overflow-hidden rounded-xl border border-border bg-surface`,children:re.map(e=>(0,M.jsxs)(`li`,{className:`flex items-center justify-between gap-3 px-4 py-3`,children:[(0,M.jsxs)(`div`,{children:[(0,M.jsx)(`p`,{className:`font-medium`,children:e.name}),(0,M.jsx)(`p`,{className:`text-sm text-muted`,children:e.email})]}),(0,M.jsx)(`span`,{className:`text-xs tracking-wide text-primary uppercase`,children:e.role})]},e.email))})]})}function B(e){return e!==`__proto__`&&e!==`constructor`&&e!==`prototype`}function V(e,t){let n=Object.create(null);if(e)for(let t of Object.keys(e))B(t)&&(n[t]=e[t]);if(t&&typeof t==`object`)for(let e of Object.keys(t))B(e)&&(n[e]=t[e]);return n}function H(e){if(!e)return Object.create(null);let t=Object.create(null);for(let n of Object.keys(e))B(n)&&(t[n]=e[n]);return t}var oe=()=>{throw Error(`createServerOnlyFn() functions can only be called on the server!`)},U=(e,t)=>{let n=t||e||{};n.method===void 0&&(n.method=`GET`);let r=e=>U(void 0,{...n,validator:e,inputValidator:e});return Object.assign(e=>U(void 0,{...n,...e}),{options:n,middleware:e=>{let t=[...n.middleware||[]];e.forEach(e=>{i in e?e.options.middleware&&t.push(...e.options.middleware):t.push(e)});let r=U(void 0,{...n,middleware:t});return r[i]=!0,r},validator:r,inputValidator:r,handler:(...e)=>{let[t,r]=e,i={...n,extractedFn:t,serverFn:r},a=[...i.middleware||[],le(i)];return t.method=n.method,Object.assign(async e=>{let n=await W(a,`client`,{...t,...i,data:e?.data,headers:e?.headers,signal:e?.signal,fetch:e?.fetch,context:H()}),r=s(n.error);if(r)throw r;if(n.error)throw n.error;return n.result},{...t,method:n.method,__executeServer:async e=>{let r=oe(),i=r.contextAfterGlobalMiddlewares;return await W(a,`server`,{...t,data:e.data,method:e.method??n.method,serverFnMeta:t.serverFnMeta,context:V(e.context,i),request:r.request}).then(e=>({result:e.result,error:e.error,context:e.sendContext}))}})}})};async function W(e,n,r){let i=se([...t()?.functionMiddleware||[],...e]);if(n===`server`){let e=oe({throwIfNotFound:!1});e?.executedRequestMiddlewares&&(i=i.filter(t=>!e.executedRequestMiddlewares.has(t)))}let a=async e=>{let t=i.shift();if(!t)return e;try{let r=`validator`in t.options?t.options.validator:void 0;!r&&`inputValidator`in t.options&&(r=t.options.inputValidator),r&&n===`server`&&(e.data=await ce(r,e.data));let i;if(n===`client`?`client`in t.options&&(i=t.options.client):`server`in t.options&&(i=t.options.server),i){let t=async(t={})=>{let n=await a({...e,...t,context:V(e.context,t.context),sendContext:V(e.sendContext,t.sendContext),headers:f(e.headers,t.headers),_callSiteFetch:e._callSiteFetch,fetch:e._callSiteFetch??t.fetch??e.fetch,result:t.result===void 0?t instanceof Response?t:e.result:t.result,error:t.error??e.error});if(n.error)throw n.error;return n},n=await i({...e,next:t});if(o(n))return{...e,error:n};if(n instanceof Response)return{...e,result:n};if(!n)throw Error(`User middleware returned undefined. You must call next() or return a result in your middlewares.`);return n}return a(e)}catch(t){return{...e,error:t}}};return a({...r,headers:r.headers||{},sendContext:r.sendContext||{},context:r.context||H(),_callSiteFetch:r.fetch})}function se(e,t=100){let n=new Set,r=[],i=(e,a)=>{if(a>t)throw Error(`Middleware nesting depth exceeded maximum of ${t}. Check for circular references.`);e.forEach(e=>{e.options.middleware&&i(e.options.middleware,a+1),n.has(e)||(n.add(e),r.push(e))})};return i(e,0),r}async function ce(e,t){if(e==null)return{};if(`~standard`in e){let n=await e[`~standard`].validate(t);if(n.issues)throw Error(JSON.stringify(n.issues,void 0,2));return n.value}if(`parse`in e)return e.parse(t);if(typeof e==`function`)return e(t);throw Error(`Invalid validator type!`)}function le(e){return{"~types":void 0,options:{inputValidator:e.validator??e.inputValidator,client:async({next:t,sendContext:n,fetch:r,...i})=>{let a={...i,context:n,fetch:r};return t(await e.extractedFn?.(a))},server:async({next:t,...n})=>{let r=await e.serverFn?.(n);return t({...n,result:r})}}}}var G=U({method:`POST`}).handler(e(`c9457b4136f459a1fee90d8c7edafb9ecec1d1cfa590570e1111302762702dc4`)),K=U({method:`POST`}).handler(e(`b0c7cb792e7d0700cfeee0557483816d4d19d0eafc88da92c0417ab802ed3d9e`)),q=U({method:`POST`}).handler(e(`a3c39b0cc66bd4484c0e8e3bdddc022a8511eaddc2d8d20ea54df7bca3f89592`)),ue=U({method:`POST`}).handler(e(`ec8a4decd42eafd626832a1d56d3d0dc0d3fae02619880ad9be72a686e09f11f`)),de=U({method:`POST`}).handler(e(`a3c280c3aea37e586efb8514a9ddc8e440e9a61f15370078a87cced767967cdc`)),fe=U({method:`POST`}).handler(e(`89f9410beec411473a46d4ce7502c215757fa6264c1eab4be755750c860bec58`)),pe=U({method:`POST`}).handler(e(`f3632ca2be61fbb489add5a5c357e07087b66e3bd388aa214c3fa2411dff356c`)),me=`w1-october-guide`,he=[{n:`1`,title:`SYSTEM ARCHITECTURE`,body:`1.1 Core stack

Web application — Next.js + React + TypeScript
Job creation, status, asset review, render review, approvals

Authentication — Supabase Auth
Private user access and session management

Database — PostgreSQL via Supabase
Jobs, assets, manifests, approvals, costs, policies

Private media storage — Supabase Storage
Originals, proxies, thumbnails, renders, audio

Durable workflows — Trigger.dev
Generation, polling, download, transcription, analysis, rendering

Rendering — Remotion
Deterministic composition and timeline assembly

Media inspection — FFprobe
Duration, codec, resolution, frame rate, integrity

AI planning — Structured-output LLM
Script analysis, asset matching, Creative Manifest proposals

Schema validation — Zod
Validate AI and application contracts

Transcription — Whisper-compatible / ElevenLabs
Transcript and word-level timing

Source control — GitHub
Repository and pull requests

CI — GitHub Actions
Type checks, linting, tests

Monitoring — Sentry + structured logs
Application and job failure visibility`},{n:`2`,title:`HIGH-LEVEL PROCESS`,body:`User creates job
↓
Job validated
↓
Presenter obtained/generated
↓
Existing assets searched
↓
Missing assets generated
↓
Media inspected + normalised
↓
Presenter transcribed
↓
Script alignment check
↓
Asset segments identified
↓
Creative Manifest generated
↓
Manifest validated
↓
Remotion render
↓
Automated QA
↓
Editor review
↓
Approve / replace asset / reject`},{n:`3`,title:`CORE DATA MODEL`,body:`The minimum database model should contain the following entities.

users
campaigns
campaign_policy_versions
jobs
job_steps
assets
asset_segments
provider_attempts
creative_manifests
renders
qa_results
review_decisions
approvals
cost_ledger`},{n:`4`,title:`CAMPAIGN`,body:`Represents the approved campaign or product configuration.

Schema
type Campaign = {
  id: string;
  name: string;
  productName?: string;
  status: "ACTIVE" | "INACTIVE";
  createdAt: string;
  updatedAt: string;
};

Database:
campaigns
id uuid primary key
name text not null
product_name text null
status text not null
created_at timestamptz not null
updated_at timestamptz not null`},{n:`5`,title:`CAMPAIGN POLICY VERSION`,body:`Campaign rules must be versioned.
A job should point to a specific policy version rather than whichever version happens to be current later.

type CampaignPolicyVersion = {
  id: string;
  campaignId: string;
  version: number;
  targetAudience?: string;
  approvedMessaging: string[];
  prohibitedMessaging: string[];
  requiredCopy: string[];
  prohibitedVisuals: string[];
  cta: {
    text: string;
    destination?: string;
    minimumDurationSeconds?: number;
  };
  brand: {
    logoAssetId?: string;
    fontFamily?: string;
    primaryColour?: string;
    captionPreset?: string;
    endFramePreset?: string;
  };
  approvalRoles: string[];
  createdAt: string;
};`},{n:`6`,title:`JOB`,body:`The Job is the central production record.

Schema
type JobStatus =
  | "DRAFT"
  | "READY"
  | "ASSET_GENERATION"
  | "ASSET_ANALYSIS"
  | "EDIT_PLANNING"
  | "RENDERING"
  | "QA"
  | "EDITOR_REVIEW"
  | "APPROVED"
  | "REJECTED"
  | "FAILED"
  | "CANCELLED";

type Job = {
  id: string;
  campaignId: string;
  campaignPolicyVersionId: string;
  scriptText: string;
  scriptVersion: string;
  presenterWorkflow: string;
  visualBrief?: string;
  referenceAssetIds?: string[];
  targetDurationSeconds: number;
  width: number;
  height: number;
  fps: number;
  budgetCap: number;
  currency: string;
  status: JobStatus;
  createdBy: string;
  createdAt: string;
  updatedAt: string;
};

Default pilot format:
width = 1080
height = 1920
fps = 30
aspect ratio = 9:16
target duration ≈ 30 seconds`},{n:`7`,title:`JOB STEPS`,body:`Each long-running production stage requires its own persistent state.

type JobStepStatus =
  | "PENDING"
  | "QUEUED"
  | "RUNNING"
  | "WAITING_EXTERNAL"
  | "COMPLETED"
  | "FAILED"
  | "CANCELLED";

type JobStep = {
  id: string;
  jobId: string;
  type:
    | "PRESENTER"
    | "ASSET_SEARCH"
    | "BROLL_GENERATION"
    | "MEDIA_INSPECTION"
    | "TRANSCRIPTION"
    | "ASSET_ANALYSIS"
    | "MANIFEST"
    | "RENDER"
    | "QA";
  status: JobStepStatus;
  attemptCount: number;
  startedAt?: string;
  completedAt?: string;
  errorCode?: string;
  errorMessage?: string;
  metadata?: Record<string, unknown>;
};

The browser must never be the holder of workflow state.
All state persists in PostgreSQL.`},{n:`8`,title:`ASSET`,body:`An Asset represents a complete media file.

type AssetType =
  | "PRESENTER_VIDEO"
  | "BROLL_VIDEO"
  | "IMAGE"
  | "AUDIO"
  | "MUSIC"
  | "SFX"
  | "LOGO"
  | "CTA"
  | "END_FRAME";

type Asset = {
  id: string;
  jobId?: string;
  campaignId?: string;
  type: AssetType;
  source: "UPLOAD" | "INTERNAL_LIBRARY" | "GENERATED" | "STOCK";
  provider?: string;
  providerTaskId?: string;
  originalStoragePath: string;
  proxyStoragePath?: string;
  thumbnailStoragePath?: string;
  prompt?: string;
  recipe?: Record<string, unknown>;
  durationSeconds?: number;
  width?: number;
  height?: number;
  fps?: number;
  videoCodec?: string;
  audioCodec?: string;
  rightsStatus: "UNKNOWN" | "APPROVED" | "RESTRICTED" | "EXPIRED";
  approvalStatus: "PENDING" | "APPROVED" | "REJECTED";
  cost?: number;
  currency?: string;
  description?: string;
  tags?: string[];
  createdAt: string;
};`},{n:`9`,title:`ASSET SEGMENT`,body:`The system must select exact usable portions of footage.

type AssetSegment = {
  id: string;
  assetId: string;
  startSeconds: number;
  endSeconds: number;
  description?: string;
  approvalStatus: "PENDING" | "APPROVED" | "REJECTED";
  rightsStatus: "APPROVED" | "RESTRICTED" | "UNKNOWN";
  generatedBy: "AI" | "EDITOR" | "SYSTEM";
  createdAt: string;
};

Example:
asset_789
duration = 30 seconds
segment_1 — 03.20 → 05.40
segment_2 — 12.70 → 14.10

Only approved segments may automatically enter the final Creative Manifest.`},{n:`10`,title:`PROVIDER ATTEMPT`,body:`Every provider API operation must be independently recorded.

type ProviderAttempt = {
  id: string;
  jobId: string;
  jobStepId: string;
  provider: string;
  operation: "GENERATE" | "TRANSCRIBE" | "ANALYSE" | "DOWNLOAD";
  requestHash: string;
  idempotencyKey: string;
  providerTaskId?: string;
  status: "SUBMITTED" | "PROCESSING" | "COMPLETED" | "FAILED" | "CANCELLED";
  expectedCost?: number;
  actualCost?: number;
  submittedAt: string;
  completedAt?: string;
  errorCode?: string;
  errorMessage?: string;
  outputAssetId?: string;
};

This prevents provider operations from becoming invisible black boxes, humanity having already invented enough of those.`},{n:`11`,title:`COST LEDGER`,body:`Every paid operation must create a cost record.

type CostLedgerEntry = {
  id: string;
  jobId: string;
  providerAttemptId?: string;
  type: "RESERVATION" | "ACTUAL" | "RELEASE" | "ADJUSTMENT";
  amount: number;
  currency: string;
  createdAt: string;
};

Before a paid provider submission:
current actual spend
+
current reserved spend
+
estimated new operation
<= job budget cap

If false:
STOP
→ mark job step blocked
→ require authorised intervention`},{n:`12`,title:`PROVIDER ADAPTER CONTRACT`,body:`All media providers must use a common application interface.

interface MediaProviderAdapter<TInput, TResult> {
  submit(
    input: TInput,
    context: { jobId: string; idempotencyKey: string; }
  ): Promise<{ providerTaskId: string; estimatedCost?: number; }>;

  getStatus(providerTaskId: string): Promise<"QUEUED" | "PROCESSING" | "COMPLETED" | "FAILED">;

  getResult(providerTaskId: string): Promise<TResult>;

  cancel?(providerTaskId: string): Promise<void>;
}

Adapters may include:
FloyoAdapter
PresenterProviderAdapter
BrollProviderAdapter
TranscriptionAdapter
AIProviderAdapter

Application code must not contain provider-specific logic outside these adapters.`},{n:`13`,title:`MEDIA STORAGE STRUCTURE`,body:`Use private object storage.

Recommended structure:
/campaigns
  /{campaignId}
    /brand
      logos/
      fonts/
      cta/
      end-frames/
    /jobs
      /{jobId}
        /source
          presenter/
          uploads/
        /generated
          presenter/
          broll/
          images/
        /proxies/
        /thumbnails/
        /audio
          presenter/
          music/
          sfx/
        /transcripts/
        /manifests/
        /renders
          /v1/
          /v2/
          /v3/
        /qa/

Example:
campaigns/cmp_001/jobs/job_045/renders/v3/advert.mp4`},{n:`14`,title:`STORAGE RULES`,body:`Originals
Original files must be immutable.
Never overwrite:
source/
generated/
Create new objects instead.

Derivatives
May be regenerated but require versioning where output matters.
Examples:
proxy_v1.mp4
thumbnail_v1.jpg
render_v3.mp4

Access
All production media buckets remain private.
Browser access should use a short-lived signed URL rather than public storage URLs.`},{n:`15`,title:`API DESIGN`,body:`The public application API should expose only the operations required by the UI.
Provider API operations should generally remain internal worker operations.`},{n:`16`,title:`JOB APIs`,body:`Create Job
POST /api/jobs

Request:
{
  "campaignId": "cmp_001",
  "campaignPolicyVersionId": "policy_003",
  "scriptText": "Approved script...",
  "scriptVersion": "v1",
  "presenterWorkflow": "floyo",
  "visualBrief": "Fast social advert...",
  "targetDurationSeconds": 30,
  "budgetCap": 25
}

Response:
{ "id": "job_001", "status": "DRAFT" }

Get Job
GET /api/jobs/{jobId}

Start Production
POST /api/jobs/{jobId}/start

Validation before start:
campaign exists
policy exists
script present
budget present
presenter workflow selected
required campaign configuration present

Success: DRAFT → READY
Trigger durable production workflow.

Get Job Status
GET /api/jobs/{jobId}/status

Response:
{
  "status": "ASSET_GENERATION",
  "steps": [
    { "type": "PRESENTER", "status": "COMPLETED" },
    { "type": "BROLL_GENERATION", "status": "RUNNING" }
  ]
}`},{n:`17`,title:`ASSET APIs`,body:`Create Upload URL
POST /api/assets/upload-url

Request:
{
  "jobId": "job_001",
  "fileName": "presenter.mp4",
  "assetType": "PRESENTER_VIDEO"
}

Response:
{ "signedUploadUrl": "...", "storagePath": "..." }

Register Uploaded Asset
POST /api/assets

Get Job Assets
GET /api/jobs/{jobId}/assets

Optional filters:
type
approvalStatus
rightsStatus
source

Approve Asset
POST /api/assets/{assetId}/approve

Reject Asset
POST /api/assets/{assetId}/reject`},{n:`18`,title:`MANIFEST APIs`,body:`Generate Manifest
Generally triggered internally through the production workflow.

Manual retry endpoint:
POST /api/jobs/{jobId}/manifest/generate

Get Current Manifest
GET /api/jobs/{jobId}/manifest

Validate Manifest
POST /api/jobs/{jobId}/manifest/validate`},{n:`19`,title:`RENDER APIs`,body:`Start Render
POST /api/jobs/{jobId}/render
Normally invoked automatically after manifest validation.

Render Status
GET /api/jobs/{jobId}/render`},{n:`20`,title:`REVIEW APIs`,body:`Submit Review Decision
POST /api/jobs/{jobId}/review

Request:
{
  "decision": "REJECT",
  "reason": "Opening B-roll is not relevant enough."
}

Replace Visual
POST /api/jobs/{jobId}/events/{eventId}/asset

Request:
{ "assetSegmentId": "segment_201" }

Result:
manifest version increments
↓
new render created
↓
previous render retained`},{n:`21`,title:`CREATIVE MANIFEST`,body:`The Creative Manifest is the primary contract between creative planning and deterministic rendering.

It must be:
structured
versioned
schema validated
human inspectable
reproducible`},{n:`22`,title:`CREATIVE MANIFEST SCHEMA`,body:`Recommended top-level contract:

type CreativeManifest = {
  id: string;
  version: number;
  jobId: string;
  format: {
    width: number;
    height: number;
    fps: number;
    durationSeconds: number;
  };
  events: ManifestEvent[];
  audio: ManifestAudio;
  captions: CaptionConfiguration;
  endFrame?: EndFrameConfiguration;
  createdBy: "AI" | "EDITOR" | "SYSTEM";
  model?: {
    provider: string;
    model: string;
    configurationVersion: string;
  };
  createdAt: string;
};`},{n:`23`,title:`MANIFEST EVENT`,body:`type ManifestEvent = {
  id: string;
  timelineStart: number;
  timelineEnd: number;
  type: "PRESENTER" | "BROLL" | "IMAGE" | "TEXT" | "CTA" | "TRANSITION";
  assetSegmentId?: string;
  sourceIn?: number;
  sourceOut?: number;
  framing?: {
    mode: "COVER" | "CONTAIN" | "CROP";
    x?: number;
    y?: number;
    scale?: number;
  };
  motion?: {
    preset: "NONE" | "ZOOM_IN" | "ZOOM_OUT" | "PAN_LEFT" | "PAN_RIGHT";
  };
  overlay?: { text?: string; preset?: string; };
  alternatives?: string[];
};`},{n:`24`,title:`CAPTION CONFIGURATION`,body:`type CaptionConfiguration = {
  enabled: boolean;
  preset: string;
  maxLines: number;
  position: "TOP" | "CENTRE" | "BOTTOM";
  words: {
    text: string;
    start: number;
    end: number;
    emphasis?: boolean;
  }[];
};

The renderer should consume caption styling from approved presets.
The AI may indicate emphasis but should not invent arbitrary CSS.`},{n:`25`,title:`AUDIO MANIFEST`,body:`type ManifestAudio = {
  speechAssetId: string;
  music?: {
    assetId: string;
    start: number;
    end?: number;
    gainDb: number;
    duckUnderSpeech: boolean;
  };
  sfx?: {
    assetId: string;
    timelineStart: number;
    gainDb: number;
  }[];
};`},{n:`26`,title:`CTA / END FRAME`,body:`type EndFrameConfiguration = {
  preset: string;
  durationSeconds: number;
  headline?: string;
  subText?: string;
  buttonText?: string;
  logoAssetId?: string;
  mandatoryCopy?: string[];
};

CTA text must come from approved campaign configuration.`},{n:`27`,title:`MANIFEST VALIDATION`,body:`Validation happens in two stages.

Stage 1: Schema validation
Zod validates:
required properties
types
enums
nested structure
timing fields

Stage 2: Business validation
Custom validation checks:
all referenced assets exist
all segments approved
rights valid
timeline events do not exceed duration
source in/out values valid
no invalid negative timings
required CTA exists
mandatory copy exists
approved campaign policy version matches job

Failure:
Creative Manifest does not reach renderer`},{n:`28`,title:`SCRIPT ANALYSIS FLOW`,body:`Input:
approved script
visual brief
campaign policy
target duration
reference information

LLM returns:
{
  "beats": [
    {
      "id": "beat_01",
      "startEstimate": 0,
      "endEstimate": 4,
      "purpose": "hook",
      "visualNeed": "presenter plus visual interruption",
      "keywords": ["problem", "reaction"]
    }
  ]
}

This output is validated before asset matching begins.`},{n:`29`,title:`ASSET RETRIEVAL FLOW`,body:`For every script beat:
Generate visual requirement
↓
Search approved asset library
↓
Apply rights filter
↓
Apply campaign restriction filter
↓
Rank suitable asset segments
↓
Suitable asset found?
YES → Use approved segment
NO → Create generation requirement

Rights filtering occurs before creative ranking.
A perfect clip with invalid rights must never be selected.`},{n:`30`,title:`TRANSCRIPTION FLOW`,body:`Presenter asset
↓
Extract/submit audio
↓
Speech-to-text
↓
Receive transcript
↓
Receive word timings
↓
Compare with approved script

Mismatch categories:
LOW — punctuation / harmless speech variation
MEDIUM — minor wording change
HIGH — offer, price, name, product detail, CTA, required claim

Recommended behaviour:
LOW → continue
MEDIUM → flag
HIGH → stop job and require review`},{n:`31`,title:`RENDERING FLOW`,body:`Validated Creative Manifest
↓
Resolve source assets
↓
Validate storage availability
↓
Create Remotion input props
↓
Load composition
↓
Generate frames
↓
Render composition
↓
Upload rendered MP4
↓
Create Render record
↓
Run QA`},{n:`32`,title:`REMOTION INPUT CONTRACT`,body:`type RenderInput = {
  jobId: string;
  manifestVersion: number;
  width: number;
  height: number;
  fps: number;
  durationInFrames: number;
  events: ManifestEvent[];
  captions: CaptionConfiguration;
  audio: ManifestAudio;
  endFrame?: EndFrameConfiguration;
};

Do not pass arbitrary AI output directly into Remotion.
Only validated application contracts may enter the renderer.`},{n:`33`,title:`RENDER VERSIONING`,body:`Every render gets a new immutable version.
render_v1
render_v2
render_v3

type Render = {
  id: string;
  jobId: string;
  version: number;
  manifestVersion: number;
  applicationVersion: string;
  rendererVersion: string;
  storagePath: string;
  status: "QUEUED" | "RENDERING" | "COMPLETED" | "FAILED";
  startedAt?: string;
  completedAt?: string;
  errorMessage?: string;
};

This allows any advert output to be traced back to:
application version
renderer version
manifest version
assets
campaign policy`},{n:`34`,title:`AUTOMATED QA`,body:`QA occurs after rendering.

Recommended checks:
render exists
video decodes
duration within configured tolerance
resolution correct
aspect ratio correct
audio stream exists
audio not entirely silent
audio peak not clipped
caption events present
captions within safe area
CTA present
CTA duration valid
mandatory copy present
no missing asset references
no obvious black-frame runs`},{n:`35`,title:`QA RESULT`,body:`type QAResult = {
  id: string;
  jobId: string;
  renderId: string;
  rule: string;
  severity: "INFO" | "WARNING" | "BLOCKER";
  status: "PASS" | "FAIL";
  details?: string;
  createdAt: string;
};

Any BLOCKER + FAIL prevents the render from being marked release-approved.`},{n:`36`,title:`AUTHENTICATION`,body:`Use Supabase Auth.

For October:
email/password
or
magic link

SSO can be added later if required.`},{n:`37`,title:`AUTHORISATION`,body:`Recommended application roles:

Producer — Create jobs, upload assets, start production
Editor — Review cuts, replace assets, reject/approve editorial output
Release Owner — Brand/policy/release approval
Admin — Campaign, users, configuration, provider administration

Use PostgreSQL Row-Level Security.
Users must only access:
authorised campaign data
authorised jobs
authorised assets
authorised renders`},{n:`38`,title:`BACKGROUND WORKFLOW`,body:`Main Trigger.dev workflow: production-job

Recommended sequence:
validate-job
↓
prepare-presenter
↓
search-assets
↓
generate-missing-assets
↓
inspect-media
↓
transcribe-presenter
↓
verify-script
↓
analyse-assets
↓
generate-manifest
↓
validate-manifest
↓
render
↓
run-qa
↓
release-to-editor-review

Each task must be individually retryable where safe.`},{n:`39`,title:`RETRY POLICY`,body:`Not all failures should be retried.

Automatically retry
Examples:
HTTP 429
temporary 5xx
network timeout
provider status-read failure
temporary storage read failure

Recommended policy:
Attempt 1
↓
30 seconds
↓
Attempt 2
↓
2 minutes
↓
Attempt 3
↓
5 minutes
↓
FAIL

Exact timings may be tuned per provider.`},{n:`40`,title:`DO NOT AUTOMATICALLY RETRY`,body:`Do not retry:
policy refusal
invalid request
unsupported file
authentication failure
insufficient budget
rights failure
schema validation failure
invalid Creative Manifest

These require a corrected input or human decision.`},{n:`41`,title:`IDEMPOTENCY`,body:`Any paid or irreversible operation must have an idempotency key.

Example:
job_123:broll-generation:beat_04:v1

Before provider submission:
Look up existing ProviderAttempt
↓
Exists?
YES → Resume/check existing task
NO → Submit new request

A timeout does not mean: “Submit another video generation and hope accounting never notices.”`},{n:`42`,title:`PROVIDER POLLING`,body:`When provider returns asynchronous task ID:
submit()
↓
save provider task ID immediately
↓
mark WAITING_EXTERNAL
↓
poll getStatus()
↓
COMPLETED?
↓
retrieve output

Never wait synchronously inside an HTTP browser request for long-running generation.`},{n:`43`,title:`ERROR MODEL`,body:`Recommended structured application error:

type ApplicationError = {
  code: string;
  category: "VALIDATION" | "PROVIDER" | "MEDIA" | "STORAGE" | "RENDER" | "AUTH" | "POLICY" | "BUDGET" | "SYSTEM";
  retryable: boolean;
  message: string;
  providerCode?: string;
  context?: Record<string, unknown>;
};

Example codes:
JOB_INVALID_CONFIGURATION
PROVIDER_TIMEOUT
PROVIDER_RATE_LIMITED
MEDIA_CORRUPT
MEDIA_UNSUPPORTED_CODEC
TRANSCRIPT_SCRIPT_MISMATCH
ASSET_RIGHTS_INVALID
MANIFEST_SCHEMA_INVALID
MANIFEST_ASSET_MISSING
BUDGET_EXCEEDED
RENDER_FAILED
QA_BLOCKER_FAILED`},{n:`44`,title:`FAILURE BEHAVIOUR`,body:`If a job stage fails:
mark job step FAILED
↓
store structured error
↓
retain completed previous steps
↓
do not delete successful assets
↓
display failure in UI
↓
allow safe retry where permitted

The whole production job should not restart from zero unless technically required.`},{n:`45`,title:`LOGGING`,body:`Every important operation should log:
timestamp
jobId
jobStepId
userId where applicable
provider
providerTaskId
manifestVersion
renderVersion
operation
duration
cost
status
errorCode

Never log:
API secrets
authentication tokens
private credentials
full sensitive provider responses`},{n:`46`,title:`MONITORING`,body:`Minimum monitoring:
application exceptions
failed workflows
render failures
provider failures
job duration
provider latency
budget failures
storage failures

Use Sentry for application error tracking.
Trigger.dev provides workflow execution visibility.`},{n:`47`,title:`DEPLOYMENT ARCHITECTURE`,body:`Recommended:

Vercel
↓
Next.js application

Supabase
↓
PostgreSQL
Authentication
Storage

Trigger.dev
↓
Durable workflow execution

Render environment
↓
Remotion
FFprobe

Do not make long-running video rendering dependent on a standard short-lived web request.`},{n:`48`,title:`ENVIRONMENTS`,body:`Maintain:
development
staging
production

Each environment should use independent configuration.
At minimum separate:
provider credentials
application URLs
budgets
storage paths
database configuration
webhooks
AI configuration`},{n:`49`,title:`SECRETS`,body:`Secrets must use managed environment secrets.

Examples:
SUPABASE_SERVICE_ROLE_KEY
OPENAI_API_KEY
TRANSCRIPTION_API_KEY
UGC_PROVIDER_API_KEY
BROLL_PROVIDER_API_KEY
TRIGGER_SECRET_KEY

Secrets must never appear in:
frontend bundle
Git repository
Creative Manifest
database records
logs`},{n:`50`,title:`CI/CD`,body:`GitHub Actions pipeline:
Pull Request
↓
Install
↓
Lint
↓
TypeScript type check
↓
Unit tests
↓
Build
↓
Optional Playwright tests
↓
Merge
↓
Deploy staging

Production deployment should require successful staging smoke testing.`},{n:`51`,title:`UNIT TESTS`,body:`Vitest should cover:
Zod schemas
Creative Manifest validation
budget calculations
provider adapter behaviour
idempotency
job state transitions
rights filtering
asset selection utilities
caption timing
CTA validation
media metadata utilities`},{n:`52`,title:`INTEGRATION TESTS`,body:`Test against real services where practical:
Supabase
Trigger.dev
one presenter provider
one B-roll provider
transcription service
Remotion render worker
storage upload/download`},{n:`53`,title:`END-TO-END TESTS`,body:`Playwright should cover:
login
create job
upload media
start job
view status
open first cut
review QA
replace asset
reject render
approve render
permission restrictions`},{n:`54`,title:`REQUIRED STATE TRANSITIONS`,body:`DRAFT
↓
READY
↓
ASSET_GENERATION
↓
ASSET_ANALYSIS
↓
EDIT_PLANNING
↓
RENDERING
↓
QA
↓
EDITOR_REVIEW
↓
APPROVED

Alternative paths:
any active state → FAILED
EDITOR_REVIEW → REJECTED
REJECTED → EDIT_PLANNING or RENDERING
depending on the correction required.`},{n:`55`,title:`STATE TRANSITION RULES`,body:`A job cannot enter ASSET_GENERATION unless:
script valid
campaign policy valid
budget valid
presenter workflow valid

EDIT_PLANNING unless:
presenter available
required media available
transcription complete
rights checks complete

RENDERING unless:
Creative Manifest validated
all referenced assets exist
all referenced segments permitted

EDITOR_REVIEW unless:
render completed
QA completed
no unresolved blocking technical failure

APPROVED unless:
required editor/release approvals recorded`},{n:`56`,title:`EDITOR CORRECTION FLOW`,body:`Example visual replacement:
Editor opens review
↓
Selects weak B-roll event
↓
System shows approved alternatives
↓
Editor selects replacement
↓
New Creative Manifest version created
↓
Only affected render configuration changes
↓
New render generated
↓
QA reruns

History must retain:
old manifest
new manifest
old render
new render
editor decision
reason
timestamp`},{n:`57`,title:`REVIEW DECISION`,body:`type ReviewDecision = {
  id: string;
  jobId: string;
  renderId: string;
  userId: string;
  decision: "APPROVE" | "REJECT" | "REQUEST_CHANGE";
  reason?: string;
  createdAt: string;
};`},{n:`58`,title:`APPROVAL`,body:`type Approval = {
  id: string;
  jobId: string;
  renderId: string;
  type: "EDITOR" | "BRAND" | "POLICY" | "RELEASE";
  approvedBy: string;
  status: "APPROVED" | "REJECTED";
  reason?: string;
  createdAt: string;
};`},{n:`59`,title:`OCTOBER IMPLEMENTATION PRIORITY`,body:`Priority 1: Must work
authentication
job creation
campaign policy
asset upload
presenter pipeline
B-roll pipeline
storage
transcription
Creative Manifest
Remotion renderer
captions
audio
CTA/end frame
QA
editor review
cost tracking

Priority 2: Useful but may simplify
semantic search
automatic segment suggestions
advanced rights UI
advanced bounded timeline controls
AI policy review

Priority 3: Later
multiple generation providers
self-hosted models
complex multi-agent system
large-scale embedding infrastructure
automatic performance optimisation
publishing
cross-platform version generation`},{n:`60`,title:`OCTOBER TECHNICAL ACCEPTANCE TEST`,body:`A successful end-to-end test must prove:
1. User authenticates.
2. User creates a production job.
3. Approved script and campaign policy are stored.
4. Presenter footage is obtained.
5. Existing B-roll is searched.
6. Missing media is generated or sourced.
7. Media is normalised and inspected.
8. Presenter is transcribed.
9. Script mismatches are detected.
10. Approved media segments are selected.
11. Creative Manifest is generated.
12. Creative Manifest passes schema validation.
13. Creative Manifest passes business validation.
14. Remotion consumes the manifest.
15. A 1080×1920 advert is rendered.
16. Captions are included.
17. Music/audio are included.
18. CTA/end frame are included.
19. Automated QA executes.
20. Editor receives the first cut.
21. Editor can replace a weak visual.
22. A revised manifest/render can be produced.
23. Editor can approve or reject.
24. Costs, source assets, decisions and versions remain traceable.`},{n:`61`,title:`FINAL IMPLEMENTATION PRINCIPLE`,body:`The architecture must preserve the following separation:

AI = propose and structure creative decisions
Application = validate permissions, policy and state
Remotion = execute the edit deterministically
Human editor = judge quality and make bounded corrections
Release owner = approve where required

The October pilot should therefore produce a narrow but complete production system rather than a partially built collection of AI experiments.

The first implementation succeeds when the entire production path works predictably, failures are recoverable, every consequential decision is traceable, and the resulting first cut is useful enough that an editor prefers correcting it to rebuilding the advert from scratch.`}];function J(){return{id:me,week:`w1`,number:2,title:`Technical Specification / Implementation Build Guide`,description:`HYRAX AI VIDEO PRODUCTION PILOT
Target: October 2026 pilot
Primary objective: Approved script → generated/retrieved media → structured edit plan → rendered first-cut advert → QA → editor review.`,notes:``,due:`2026-10-31`,milestones:he.map(e=>({id:`w1-guide-${e.n}`,title:`${e.n}. ${e.title}`,status:`not_started`,due:``,notes:e.body.trim()}))}}var Y=`w1-october-spec`,ge=[{n:`1`,title:`PILOT OBJECTIVE`,body:`Build a private internal application that takes:
Approved campaign + approved script + presenter workflow + visual brief
and produces:
A rendered, reviewable 9:16 performance-marketing advert first cut that saves an editor meaningful assembly time.

The first cut must contain, where required:
• UGC/presenter footage
• B-roll/supporting visuals
• scene/cut timing
• captions
• voice/audio
• music
• sound effects
• CTA
• end frame
• mandatory campaign copy
• basic motion/overlays
• technical QA results
• editor review controls

The editor should be correcting and improving an existing advert, not rebuilding the advert from an empty timeline.`},{n:`2`,title:`OCTOBER DEFINITION OF DONE`,body:`The October pilot is complete when the following workflow runs end-to-end:

Approved Script
↓
Create Production Job
↓
Generate / Retrieve Presenter
↓
Retrieve Existing B-Roll
↓
Generate Missing B-Roll
↓
Transcribe / Align Presenter Audio
↓
Generate Structured Edit Plan
↓
Validate Edit Plan
↓
Render Video
↓
Add Captions / Music / CTA / End Frame
↓
Run Automated QA
↓
Editor Review
↓
Approve / Reject / Replace Weak Assets

The system separates AI-assisted editorial decision-making from deterministic software execution.`},{n:`3`,title:`OCTOBER SCOPE OF WORK`,body:`3.1 IN SCOPE

A. Private Production Application
Build a private authenticated web application allowing authorised Hyrax users to:
• log in
• create production jobs
• select campaign/product
• enter or load an approved script
• select presenter workflow
• add visual brief/reference
• set target duration
• define generation budget
• start production
• monitor processing status
• preview generated assets
• preview rendered advert
• review QA results
• replace a selected visual with an approved alternative
• approve or reject the first cut

Technology:
• TypeScript
• Next.js
• React
• Supabase Auth

B. Job Management
Each advert must exist as a persistent production job.

Minimum fields:
job_id
campaign_id
script_version
script_text
presenter_workflow
visual_brief
target_duration
aspect_ratio
budget_cap
status
created_by
created_at
updated_at

Recommended job lifecycle:
DRAFT
READY
ASSET_GENERATION
ASSET_ANALYSIS
EDIT_PLANNING
RENDERING
QA
EDITOR_REVIEW
APPROVED
REJECTED
FAILED

Jobs must survive:
• browser refresh
• browser closure
• worker interruption
• normal application restart

C. Presenter / UGC Pipeline
The system must support one working presenter path.

Preferred order:
Existing Hyrax/Floyo Workflow
↓
API / Export Available?
YES → Integrate
NO → Direct Provider API or Upload

Required adapter operations:
submit()
getStatus()
retrieveOutput()
getProviderTaskId()
getCost()
getError()

The application should not be tightly coupled directly to Floyo.
Floyo should sit behind a provider adapter.
If Floyo does not expose a reliable API/export path, use another provider or allow manually produced presenter footage to enter the pipeline.

D. B-Roll Pipeline
The B-roll workflow must operate in this order:
Required Visual Beat
↓
Search Approved Library
↓
Suitable Asset Exists?
YES → Reuse Asset
NO → Generate / Source Asset

October requires only:
• one internal asset library
• one external B-roll generation/source provider
• manual upload support

Every asset must record:
asset_id
job_id
source
provider
provider_task_id
file_location
duration
width
height
fps
codec
cost
prompt
rights_status
approval_status
created_at`},{n:`4`,title:`MEDIA INGEST AND NORMALISATION`,body:`Every uploaded or generated media file must pass through media preprocessing.

Use:
• FFmpeg
• FFprobe

Required processing:
Inspect input
↓
Validate file
↓
Extract metadata
↓
Normalize media
↓
Generate proxy
↓
Generate thumbnail
↓
Extract audio if required
↓
Store derivatives

Required checks:
• dimensions
• duration
• frame rate
• codec
• audio stream
• file corruption
• aspect ratio

Recommended pilot working format:
Video: MP4 / H.264
Audio: AAC
Target: 1080 × 1920
Aspect Ratio: 9:16
Frame Rate: 30fps`},{n:`5`,title:`TRANSCRIPTION AND SCRIPT ALIGNMENT`,body:`Presenter footage must be transcribed.

Required output:
{
  "text": "...",
  "words": [
    { "word": "example", "start": 1.24, "end": 1.61 }
  ]
}

The transcript must be compared against the approved script.
Important mismatches should stop automatic progression, including:
• offer changes
• CTA changes
• prices
• names
• product details
• missing required claims

Possible transcription/alignment services:
• ElevenLabs
• Whisper-based service
• comparable word-level transcription service

Custom speech recognition development is not required for October.`},{n:`6`,title:`ASSET SEGMENT IDENTIFICATION`,body:`Do not treat an entire video as one usable asset.

Create:
Asset
├── Segment A: 00:03.20–00:05.40
├── Segment B: 00:12.70–00:14.10
└── Segment C: 00:21.00–00:24.50

Minimum Asset Segment fields:
segment_id
asset_id
start_time
end_time
description
approved
rights_status
quality_score_optional

For October, segment selection may be:
1. AI suggested
2. human approved

Full autonomous shot-quality detection is not required for the first pilot.`},{n:`7`,title:`ASSET SEARCH`,body:`October search should begin simple.

Required
Search/filter by:
• description
• tags
• campaign
• asset type
• approval status
• usage rights

Optional October enhancement
Add embeddings using:
pgvector
+
LLM/VLM-generated description

Not mandatory for October
TwelveLabs.
TwelveLabs may improve semantic video search later, but it should not be a dependency for producing the first advert.`},{n:`8`,title:`EDIT DIRECTOR / CREATIVE MANIFEST`,body:`The Creative Manifest is the central technical contract between AI decision-making and deterministic rendering.
The AI does not produce the final video directly.
The AI produces structured edit instructions.

Example:
{
  "version": "1.0",
  "duration": 30,
  "format": "9:16",
  "events": [
    {
      "start": 0,
      "end": 2.4,
      "type": "presenter",
      "assetId": "asset_01",
      "segment": { "in": 0.5, "out": 2.9 },
      "crop": "center",
      "caption": { "text": "Example caption" }
    },
    {
      "start": 2.4,
      "end": 4.7,
      "type": "broll",
      "assetId": "asset_08",
      "segment": { "in": 5.2, "out": 7.5 }
    }
  ]
}

The manifest should contain:
• selected asset
• exact in/out points
• timeline start/end
• crop
• framing
• captions
• caption emphasis
• overlay
• approved motion treatment
• audio treatment
• music cue
• sound effect
• CTA
• mandatory copy
• end-frame configuration
• approved alternative asset

Every manifest must be schema validated before rendering.
Use: Zod
AI output that fails validation does not reach the renderer.`},{n:`9`,title:`AI COMPONENT`,body:`Use one primary LLM for the October pilot.
A complex multi-agent architecture is not required to prove the initial production workflow.

The AI layer performs:
Task 1 — Analyse script beats.
Task 2 — Describe required supporting visuals.
Task 3 — Match approved assets to visual requirements.
Task 4 — Recommend generation requests for missing assets.
Task 5 — Produce the Creative Manifest.

Processing path:
LLM
↓
Structured JSON
↓
Zod validation
↓
Business-rule validation
↓
Creative Manifest

The model must never directly:
• modify production files
• bypass schema validation
• approve its own output
• publish media
• initiate unrestricted render operations`},{n:`10`,title:`VIDEO RENDERER`,body:`Use: Remotion + FFmpeg

Remotion is responsible for:
• timeline composition
• clip placement
• cropping
• overlays
• motion
• presenter/B-roll switching
• captions
• text
• CTA
• end frame
• transitions

FFmpeg is responsible for:
• transcoding
• concatenation where required
• audio processing
• normalisation
• proxies
• encoding
• final MP4 production

Premiere is not required to create the automatic first cut.
Premiere may remain a downstream editing tool where final manual creative work is required.`},{n:`11`,title:`CAPTION SYSTEM`,body:`Required:
• word or phrase timing
• font
• size
• position
• safe-zone rules
• line wrapping
• highlighted/emphasised words
• brand colour/configuration

Caption presets should be reusable React components.

Example:
CaptionStyle
- fontFamily
- fontWeight
- textSize
- stroke
- background
- maxCharacters
- maxLines
- position
- highlightStyle

Pixel-level styling should be handled by deterministic templates rather than generated independently by an LLM.`},{n:`12`,title:`AUDIO SYSTEM`,body:`October requires a maximum of four audio layers:
1. Presenter / narration
2. Background music
3. Optional SFX
4. Optional generated voice

Use approved/licensed music assets rather than building AI music generation into the pilot.

Required audio controls:
• gain
• fade
• trim
• ducking
• normalisation

Recommended behaviour:
Presenter speech = primary audio
Music automatically ducked beneath speech
SFX limited to approved manifest moments`},{n:`13`,title:`CTA AND END FRAME`,body:`Build CTA/end-frame output as deterministic Remotion components.

Example:
<CTA
  headline=""
  subText=""
  buttonText=""
  logo=""
  disclaimer=""
  duration={3}
/>

Campaign configuration determines:
• CTA wording
• duration
• logo
• typography
• colours
• disclaimer
• mandatory copy

Critical offer wording must come from approved campaign configuration, not be generated freely during rendering.`},{n:`14`,title:`AUTOMATED QA`,body:`October QA should primarily use deterministic checks.

Required checks:
Source assets exist
Files decode
Correct aspect ratio
No black/broken frames
Audio exists
Audio not clipped
Captions exist
Captions within safe zones
CTA exists
CTA visible for required duration
Mandatory copy exists
Expected duration range
Render completed successfully

Possible later AI-assisted QA may include:
• brand review
• policy review
• visual quality review

These are not required as critical dependencies for the October pilot.`},{n:`15`,title:`EDITOR REVIEW`,body:`The application must not attempt to recreate Premiere.

The October review UI requires:
Video Preview
Script Beat
Current Selected Asset
Caption
QA Warning
Alternative Assets
[Replace Asset]
[Approve]
[Reject]

Editor actions:
• replace weak visual
• choose approved alternative
• approve cut
• reject cut
• enter rejection reason

Optional bounded controls:
• adjust clip in/out points
• adjust approved caption
• adjust music level

A full browser-based nonlinear editing system is outside scope.`},{n:`16`,title:`DATABASE`,body:`Use: Supabase PostgreSQL

Minimum tables:
users
campaigns
campaign_policies
jobs
job_steps
assets
asset_segments
provider_attempts
creative_manifests
renders
qa_results
review_decisions
approvals
cost_ledger

Recommended relationship:
Campaign
├── Policy Version
└── Job
     ├── Assets
     │    └── Asset Segments
     ├── Provider Attempts
     ├── Creative Manifest
     ├── Render
     ├── QA Results
     └── Review Decisions`},{n:`17`,title:`MEDIA STORAGE`,body:`Use: Supabase Storage

Recommended buckets:
source-media
generated-media
proxies
thumbnails
audio
renders
brand-assets

Storage rules:
• originals remain immutable
• derivatives are versioned
• buckets remain private
• signed URLs are used where required
• access is role-controlled
• source provenance is retained`},{n:`18`,title:`BACKGROUND JOB PROCESSING`,body:`Use: Trigger.dev

Required worker jobs:
generate-presenter
generate-broll
download-provider-output
inspect-media
create-proxy
transcribe-presenter
analyse-assets
build-manifest
render-video
run-qa

Pipeline:
create job
↓
generate presenter
↓
retrieve/search supporting assets
↓
transcription
↓
manifest generation
↓
render
↓
QA
↓
review

Each step must store:
status
attempt_number
started_at
completed_at
error
provider_task_id
cost

Paid operations require idempotency controls to prevent accidental duplicate generation and duplicate billing.`},{n:`19`,title:`PROVIDER ADAPTER INTERFACE`,body:`Create a common provider abstraction.

Example:
interface MediaProvider {
  submit(input: ProviderInput): Promise<ProviderTask>;
  status(taskId: string): Promise<ProviderStatus>;
  result(taskId: string): Promise<ProviderResult>;
  cancel?(taskId: string): Promise<void>;
}

This abstraction may be used for:
• Floyo
• UGC providers
• AI video providers
• image providers
• voice providers

Provider-specific integration logic should not be spread throughout the application.`},{n:`20`,title:`APPLICATION ARCHITECTURE`,body:`Recommended October architecture:

Next.js / React — Private Web App
↓
Supabase Auth + DB + Private Storage
↓
Trigger.dev — Workflow Workers
↓
Presenter/UGC Provider · AI Services · Asset Providers / Library
↓
Creative Manifest
↓
Remotion + FFmpeg Renderer
↓
Rendered MP4
↓
Automated QA
↓
Editor Review`},{n:`21`,title:`HOSTING`,body:`Recommended deployment architecture:

Web application — Vercel
Database — Supabase PostgreSQL
Authentication — Supabase Auth
Media storage — Supabase Storage
Workflow orchestration — Trigger.dev
Rendering — Dedicated render worker / Remotion-compatible environment
Monitoring — Sentry

Long-running video rendering should not depend on standard frontend/serverless request execution.`},{n:`22`,title:`HARDWARE REQUIRED`,body:`Under the recommended API-first pilot architecture:

Development machines
CPU — Minimum: Modern 6-core. Recommended: Modern 8+ core.
RAM — Minimum: 16 GB. Recommended: 32 GB.
Storage — Minimum: 100 GB SSD available. Recommended: 250+ GB SSD available.
Operating system — Windows/macOS/Linux.

Production GPU
A dedicated GPU is not required for the recommended October pilot because generation should use external managed providers.
GPU infrastructure becomes relevant only if Hyrax later decides to self-host:
• ComfyUI
• image generation models
• video generation models
• VLM inference
• other GPU-intensive model workloads

Self-hosted generation should therefore not be an October dependency.`},{n:`23`,title:`SOFTWARE / SERVICES REQUIRED`,body:`Primary language — TypeScript
Application framework — Next.js
UI — React
Database — PostgreSQL / Supabase
Authentication — Supabase Auth
Storage — Supabase Storage
Background jobs — Trigger.dev
Rendering — Remotion
Media processing — FFmpeg
Media inspection — FFprobe
Schema validation — Zod
AI planning — OpenAI or comparable structured-output LLM
Transcription — ElevenLabs / Whisper-compatible provider
Source control — GitHub
Continuous integration — GitHub Actions
Unit testing — Vitest
Browser testing — Playwright
Web hosting — Vercel
Monitoring — Sentry
B-roll — One selected generation/source provider
Presenter / UGC — Existing Floyo/current provider if technically viable`},{n:`24`,title:`PROJECT RESOURCE REQUIREMENTS`,body:`Technical Implementation Lead / Full-Stack Engineer
October requirement: Required
Level: Full-time / primary delivery resource
Own overall implementation; Next.js/React application; Supabase integration; database implementation; API/provider integrations; Trigger.dev workflows; system integration; deployment coordination; technical testing and issue resolution.

Senior TypeScript / React / Remotion Engineer
October requirement: Required
Level: Part-time technical oversight
Review architecture and substantive pull requests; provide guidance on authentication, database/schema changes, durable background jobs, Remotion architecture, render deployment, performance and production-level technical issues.

Lead Video Editor
October requirement: Required
Level: Part-time throughout pilot
Define first-cut quality standards; provide reference adverts; review generated cuts; assess B-roll and presenter suitability; identify required editing behaviours; provide structured acceptance/rejection feedback.

Second Video Editor
October requirement: Required for acceptance testing
Level: Periodic / final validation
Independently assess first-cut usefulness and confirm that results are genuinely useful to an editor rather than being overly influenced by the primary editor's feedback.

Brand / Policy / Release Owner
October requirement: Required
Level: Periodic / approval gates
Provide campaign-specific rules, mandatory copy, CTA requirements, claims restrictions, visual restrictions and approval criteria; make escalation and final release decisions where required.

Product / Project Owner
October requirement: Required
Level: Part-time
Confirm pilot priorities, approve scope decisions, resolve business dependencies, control provider/generation budget and confirm whether October acceptance criteria have been met.

October Resourcing Position
The October pilot does not require dedicated:
• machine-learning engineers
• neural-network engineers
• data scientists
• AI researchers
• GPU infrastructure engineers

The recommended pilot uses managed AI and media-provider APIs rather than training or self-hosting custom models.
Additional specialist resources should only be introduced if a confirmed technical requirement emerges during implementation that cannot reasonably be handled by the core engineering team.`},{n:`25`,title:`ACCESS REQUIRED BEFORE DEVELOPMENT`,body:`Hyrax must provide the following.

Content and media
• one approved campaign/product
• one approved primary script
• 5–10 representative test scripts
• three editable reference adverts
• source media for reference adverts
• brand kit
• CTA assets
• end-frame assets
• logos
• fonts
• motion guidance
• music rules
• audio rules

Provider access
• Floyo/current workflow access
• available API documentation
• API credentials
• generation account access
• billing access
• approved generation budget

Business configuration
• target audience
• campaign restrictions
• CTA wording
• required disclosures
• mandatory copy
• prohibited visual categories
• named approval owner`},{n:`26`,title:`DEVELOPMENT ENVIRONMENTS`,body:`Create separate:
development
staging
production

Environment-specific configuration must include:
• API keys
• databases where practical
• generation budgets
• provider settings
• storage configuration
• policy settings

Sensitive credentials must never be exposed to browser-side JavaScript or committed to source control.

Examples:
SUPABASE_SERVICE_ROLE_KEY
OPENAI_API_KEY
PROVIDER_SECRET
GENERATION_API_KEY`},{n:`27`,title:`OBSERVABILITY`,body:`Every production job requires searchable operational logging.

Record:
job_id
job_step
provider
provider_task_id
manifest_version
render_version
cost
duration
error
timestamp

Use:
• structured application logs
• Sentry
• Trigger.dev execution history`},{n:`28`,title:`COST CONTROL`,body:`Every paid generation request must follow:
Check remaining budget
↓
Reserve expected cost
↓
Submit provider request
↓
Store provider task ID
↓
Wait for result
↓
Record actual cost
↓
Release unused reservation

Each paid request requires an idempotency key or equivalent protection to prevent duplicate provider submissions.`},{n:`29`,title:`OCTOBER BUILD ORDER`,body:`WEEK 1 — FOUNDATION
Build:
• repository
• Next.js application
• authentication
• database
• private storage
• job creation
• campaign configuration
• media upload
• FFprobe inspection
• FFmpeg normalisation
Acceptance gate: An authorised user can create a private production job and ingest valid source media.

WEEK 2 — MEDIA PIPELINE
Build:
• presenter adapter
• B-roll provider adapter
• provider polling
• durable jobs
• provider output retrieval
• asset records
• transcription
• script comparison
• asset segment handling
Acceptance gate: The system can produce, retrieve and retain the media required to construct a complete advert.

WEEK 3 — EDIT ASSEMBLY
Build:
• script beat analysis
• Creative Manifest
• Zod validation
• Remotion composition
• captions
• audio/music handling
• CTA
• end frame
• FFmpeg final encoding
Acceptance gate: An approved script and approved media can produce an actual 9:16 MP4 automatically.

WEEK 4 — REVIEW AND HARDENING
Build:
• automated QA
• editor review page
• alternative asset replacement
• approve/reject workflow
• rejection reasons
• cost tracking
• error handling
• end-to-end testing
• staging deployment
Test against:
• primary campaign
• representative test scripts
• editor review criteria
Acceptance gate: An editor receives a usable first cut and does not have to rebuild the advert from scratch.`},{n:`30`,title:`ACCEPTANCE CRITERIA`,body:`AC01 — An authorised user can create a production job.
AC02 — The job stores the approved script and campaign configuration.
AC03 — The system obtains or accepts presenter footage.
AC04 — The system searches existing approved assets before generating missing B-roll.
AC05 — Generated and reused assets are stored with provenance.
AC06 — Presenter audio is transcribed with word timing.
AC07 — The system produces a schema-valid Creative Manifest.
AC08 — Remotion successfully renders a vertical advert.
AC09 — The render includes presenter footage where required.
AC10 — The render includes supporting visuals.
AC11 — The render includes captions.
AC12 — The render includes configured audio/music.
AC13 — The render includes the required CTA.
AC14 — The render includes the required end frame.
AC15 — Automated QA executes and records results.
AC16 — The editor can preview the first cut.
AC17 — The editor can replace at least one weak supporting visual without rebuilding the advert.
AC18 — The editor can approve or reject the output.
AC19 — The system records provider costs and production job history.
AC20 — The system can identify which manifest and source assets produced each render.`},{n:`31`,title:`RECOMMENDED PILOT SUCCESS METRICS`,body:`These are recommended engineering/pilot targets rather than requirements explicitly contained in the original overview.

First-cut timeline retention — ≥70% of automatically assembled timeline retained
Full rebuild rate — Editor should not normally rebuild the advert from zero
Normal editor correction time — Target ≤15–20 minutes
Normal test-job completion — Target ≥90% without engineering intervention
Cost visibility — 100% of paid provider operations attached to job cost records

Track:
cost/job
cost/provider
cost/usable generated asset
cost/approved first cut

A provider returning technically valid media is not itself a success condition. The output must be useful to production.`},{n:`32`,title:`OUT OF SCOPE FOR OCTOBER`,body:`The following should not block October delivery:
• autonomous campaign strategy
• autonomous script writing
• autonomous claims creation
• custom AI model training
• neural-network training
• self-hosted video generation
• custom VLM development
• fully autonomous editing
• browser-based Premiere replacement
• full nonlinear browser editor
• automatic publishing
• broad multi-platform export
• unlimited advert variations
• large-scale analytics
• performance prediction
• reinforcement learning
• automatic ROAS optimisation
• large-scale semantic analysis of the entire historical media archive
• complex multi-agent production orchestration
• bespoke AI music generation`},{n:`33`,title:`RECOMMENDED SCOPE SIMPLIFICATIONS`,body:`33.1 TwelveLabs
Defer unless the existing media volume proves normal metadata and semantic search insufficient.
Initial retrieval can use:
PostgreSQL metadata
+
asset descriptions
+
pgvector if required

33.2 Complex AI Policy Detection
Defer advanced AI-based policy checking.
October should primarily use:
• deterministic campaign rules
• configured mandatory copy
• configured visual restrictions
• human approval

33.3 Multiple Generation Providers
Do not introduce unnecessary provider complexity during the first pilot.
October should begin with:
1 working presenter workflow
+
1 B-roll generation/source workflow
+
existing approved asset library
Additional providers should only be introduced when testing identifies a measurable quality, cost or reliability requirement.

33.4 Advanced Browser Editing
Do not build a full editing environment.
Provide only the bounded controls required to review and correct a generated first cut.

33.5 Complex Multi-Agent Architecture
A sophisticated multi-agent production system should not be an October dependency.
The initial implementation can use a single structured planning layer responsible for producing a validated Creative Manifest.
The architecture should remain modular enough for specialist agents to be added later without replacing the renderer or core production contracts.`},{n:`34`,title:`MINIMUM OCTOBER PRODUCT`,body:`The October product requires the following minimum capabilities:
1. Private login
2. Create production job
3. Approved script input
4. Campaign/product rules
5. Presenter generation or upload
6. B-roll library search
7. Missing B-roll generation/source
8. Private media storage
9. Transcription and word timing
10. Script beat analysis
11. Creative Manifest generation
12. Creative Manifest validation
13. Remotion rendering
14. Captions
15. Audio/music
16. CTA
17. End frame
18. MP4 export
19. Automated QA
20. Editor preview
21. Replace selected weak asset
22. Approve/reject
23. Cost tracking
24. Production history

Anything added beyond these capabilities should have a clear reason for being necessary to deliver or validate the October pilot.`},{n:`35`,title:`FINAL OCTOBER DELIVERABLE`,body:`By 31 October, the following end-to-end demonstration must be possible:

Producer logs into Hyrax
↓
Chooses campaign/product
↓
Supplies approved script
↓
Starts production
↓
System obtains presenter footage
↓
System retrieves/generates supporting visuals
↓
System creates structured edit plan
↓
System validates edit plan
↓
System renders advert
↓
System adds captions/audio/CTA/end frame
↓
System performs QA
↓
Editor watches completed first cut
↓
Editor replaces weak shots if necessary
↓
Editor approves or rejects

The produced advert does not need to be publish-ready.

The October technical success criterion is:
The system must perform enough correct production and editorial assembly that an editor gains meaningful value from opening the generated first cut instead of starting from a blank editing timeline.

If the editor routinely discards the generated output and reconstructs the advert from scratch, the pilot has not met its primary objective.`}];function _e(){return{id:Y,week:`w1`,number:1,title:`October 2026 Technical Specification, Scope of Work and Build Requirements`,description:`HYRAX AI VIDEO PRODUCTION PILOT
Document purpose: Define the minimum technical system required to deliver the October pilot.
Primary acceptance date: 31 October 2026`,notes:``,due:`2026-10-31`,milestones:ge.map(e=>({id:`w1-spec-${e.n}`,title:`${e.n}. ${e.title}`,status:`not_started`,due:``,notes:e.body.trim()}))}}var ve=`hyrax-october-tracker-v3`,ye=`hyrax-october-tracker-v2`,X=[{id:`not_started`,label:`Not started`},{id:`in_progress`,label:`In progress`},{id:`blocked`,label:`Blocked`},{id:`done`,label:`Done`}],Z=[{id:`w1`,label:`Week 1`,range:`1–7 Oct`},{id:`w2`,label:`Week 2`,range:`8–14 Oct`},{id:`w3`,label:`Week 3`,range:`15–21 Oct`},{id:`w4`,label:`Week 4`,range:`22–31 Oct`}];function be(e){let t=e.some(e=>e.id===Y),n=e.some(e=>e.id===me);if(!t)return{goals:[_e(),J()],changed:!0};if(!n){let t=e.findIndex(e=>e.id===Y),n=[...e];return n.splice(t+1,0,J()),{goals:n,changed:!0}}return{goals:e,changed:!1}}function xe(){return{project:`Hyrax AI Video Production Pilot`,briefDate:`2026-09-28`,answers:A(),people:[],goals:[_e(),J()]}}function Se(){try{let e=localStorage.getItem(`hyrax-october-tracker-v3`)??localStorage.getItem(ye);if(e){let t=j(JSON.parse(e)),n={...t,people:t.people??[]},r=be(n.goals);if(r.goals.some(e=>e.id===`w1-october-spec`))return{...n,goals:r.goals}}}catch{}return xe()}function Ce(e){localStorage.setItem(ve,JSON.stringify(e))}function we(e,t){let n=e.filter(e=>e.week===t).map(e=>e.number);return(n.length?Math.max(...n):0)+1}function Te(e){let t=e.milestones.length,n=e.milestones.filter(e=>e.status===`done`).length;return{done:n,total:t,pct:t?Math.round(n/t*100):0}}function Ee(){return crypto.randomUUID()}var De=`hyrax-team-email`;function Oe(){let[e,t]=(0,S.useState)(null),[n,r]=(0,S.useState)(`all`),[i,o]=(0,S.useState)(`all`),[s,c]=(0,S.useState)(``),[l,u]=(0,S.useState)(null),[d,f]=(0,S.useState)(`board`),[p,m]=(0,S.useState)(``),[h,g]=(0,S.useState)(null),[_,x]=(0,S.useState)(!1),[C,w]=(0,S.useState)([]),[T,E]=(0,S.useState)([]);(0,S.useEffect)(()=>{t(Se());let e=sessionStorage.getItem(De);g(e?ie(e):null),x(!0)},[]),(0,S.useEffect)(()=>{e&&Ce(e)},[e]),(0,S.useEffect)(()=>{if(!p)return;let e=setTimeout(()=>m(``),1800);return()=>clearTimeout(e)},[p]),(0,S.useEffect)(()=>{if(!h)return;let e=!1;return G({data:{email:h.email}}).then(n=>{if(e)return;w(n.comments),E(n.answers);let r=be(n.goals);t(e=>{if(!e)return e;let t=n.answers.find(e=>e.author===h.name);return{...e,goals:r.goals,answers:t?t.body:e.answers}}),r.changed&&h.role===`owner`&&K({data:{email:h.email,goals:r.goals}}).catch(()=>m(`Could not save the board.`))}).catch(()=>m(`Could not open the shared tracker.`)),()=>{e=!0}},[h]);let D=(0,S.useMemo)(()=>{let t=e?.goals.flatMap(e=>e.milestones)??[];return{goals:e?.goals.length??0,milestones:t.length,done:t.filter(e=>e.status===`done`).length,blocked:t.filter(e=>e.status===`blocked`).length}},[e]);if(!_||!e)return(0,M.jsx)(`main`,{className:`mx-auto max-w-5xl px-4 py-10 text-muted`,children:`Loading tracker…`});let O=h?.role===`member`;if(!h)return(0,M.jsx)(a,{to:`/enter`});let k=h,A=s.trim().toLowerCase(),N=e.goals.filter(e=>{if(n!==`all`&&e.week!==n)return!1;let t=`${e.title} ${e.description} ${e.notes} ${e.milestones.map(e=>`${e.title} ${e.notes}`).join(` `)}`.toLowerCase();return!(A&&!t.includes(A)||i!==`all`&&!e.milestones.some(e=>e.status===i))});function P(e){t(t=>t&&e(t))}function F(e){t(t=>{if(!t)return t;let n=e(t);return k.role===`owner`&&K({data:{email:k.email,goals:n.goals}}).catch(()=>m(`Could not save the board.`)),n})}function I(e,t){fe({data:{email:k.email,id:e,body:t}}).then(t=>w(n=>n.map(n=>n.id===e?t:n))).catch(()=>m(`Could not edit that comment.`))}function L(e){pe({data:{email:k.email,id:e}}).then(()=>w(t=>t.filter(t=>t.id!==e))).catch(()=>m(`Could not delete that comment.`))}function R(){let t=new Blob([JSON.stringify(e,null,2)],{type:`application/json`}),n=document.createElement(`a`);n.href=URL.createObjectURL(t),n.download=`hyrax-tracker.json`,n.click(),URL.revokeObjectURL(n.href),m(`Exported`)}function z(e){e.text().then(e=>{try{let n=j(JSON.parse(e));if(!Array.isArray(n.goals))throw Error(`Missing goals`);t(n),k.role===`owner`&&K({data:{email:k.email,goals:n.goals}}).catch(()=>m(`Could not save the board.`)),m(`Imported`)}catch{m(`Import failed`)}})}return(0,M.jsxs)(`div`,{className:`min-h-screen bg-bg text-fg`,children:[(0,M.jsxs)(`header`,{className:`sticky top-0 z-20 border-b border-border bg-bg/95 backdrop-blur`,children:[(0,M.jsxs)(`div`,{className:`mx-auto flex max-w-5xl flex-wrap items-center gap-4 px-4 py-4`,children:[(0,M.jsxs)(`div`,{className:`min-w-44`,children:[(0,M.jsx)(`p`,{className:`font-mono text-xs tracking-wide text-primary`,children:`HYRAX`}),(0,M.jsx)(`h1`,{className:`text-lg font-semibold leading-tight`,children:`October tracker`}),(0,M.jsxs)(`p`,{className:`text-sm text-muted`,children:[h.name,` · `,h.role,`.`,` `,(0,M.jsx)(`button`,{type:`button`,className:`underline`,onClick:()=>{sessionStorage.removeItem(De),g(null)},children:`Use another email`})]})]}),(0,M.jsxs)(`div`,{className:`flex rounded-lg border border-border p-1`,children:[(0,M.jsx)(`button`,{type:`button`,className:`min-h-11 rounded-md px-3 text-sm ${d===`board`?`bg-primary font-semibold text-primary-ink`:``}`,onClick:()=>f(`board`),children:`Board`}),(0,M.jsx)(`button`,{type:`button`,className:`min-h-11 rounded-md px-3 text-sm ${d===`answers`?`bg-primary font-semibold text-primary-ink`:``}`,onClick:()=>f(`answers`),children:`Answers`}),(0,M.jsx)(`button`,{type:`button`,className:`min-h-11 rounded-md px-3 text-sm ${d===`people`?`bg-primary font-semibold text-primary-ink`:``}`,onClick:()=>f(`people`),children:`Team`})]}),(0,M.jsxs)(`dl`,{className:`flex flex-1 flex-wrap gap-2`,children:[(0,M.jsx)(Q,{label:`Goals`,value:D.goals}),(0,M.jsx)(Q,{label:`Milestones`,value:D.milestones}),(0,M.jsx)(Q,{label:`Done`,value:D.done}),(0,M.jsx)(Q,{label:`Blocked`,value:D.blocked})]}),(0,M.jsxs)(`div`,{className:`flex flex-wrap gap-2`,children:[!O&&(0,M.jsxs)(`button`,{type:`button`,className:`inline-flex min-h-11 items-center gap-2 rounded-lg bg-primary px-3 text-sm font-semibold text-primary-ink`,onClick:()=>u({kind:`goal`,isNew:!0,goal:ke(e.goals,n===`all`?`w2`:n)}),children:[(0,M.jsx)(v,{size:16}),` Goal`]}),(0,M.jsx)(Ae,{label:`Export`,onClick:R,children:(0,M.jsx)(ee,{size:16})}),!O&&(0,M.jsxs)(`label`,{className:`inline-flex min-h-11 cursor-pointer items-center gap-2 rounded-lg border border-border bg-surface px-3 text-sm`,children:[(0,M.jsx)(te,{size:16}),` Import`,(0,M.jsx)(`input`,{type:`file`,accept:`application/json`,className:`sr-only`,onChange:e=>{let t=e.target.files?.[0];t&&z(t),e.target.value=``}})]}),!O&&(0,M.jsx)(Ae,{label:`Reset`,onClick:()=>{if(confirm(`Replace the shared board with the original Week 1 seed?`)){let e=xe();t(e),K({data:{email:h.email,goals:e.goals}}).catch(()=>m(`Could not save the board.`)),m(`Reset`)}},children:(0,M.jsx)(y,{size:16})})]})]}),(0,M.jsxs)(`div`,{className:`mx-auto flex max-w-5xl flex-wrap gap-2 px-4 pb-4`,children:[(0,M.jsxs)(`select`,{className:`min-h-11 rounded-lg border border-border bg-surface px-3 text-sm`,value:n,onChange:e=>r(e.target.value),children:[(0,M.jsx)(`option`,{value:`all`,children:`All weeks`}),Z.map(e=>(0,M.jsx)(`option`,{value:e.id,children:e.label},e.id))]}),(0,M.jsxs)(`select`,{className:`min-h-11 rounded-lg border border-border bg-surface px-3 text-sm`,value:i,onChange:e=>o(e.target.value),children:[(0,M.jsx)(`option`,{value:`all`,children:`Any status`}),X.map(e=>(0,M.jsx)(`option`,{value:e.id,children:e.label},e.id))]}),(0,M.jsxs)(`label`,{className:`flex min-h-11 min-w-52 flex-1 items-center gap-2 rounded-lg border border-border bg-surface px-3 text-sm`,children:[(0,M.jsx)(b,{size:16,className:`text-muted`}),(0,M.jsx)(`input`,{value:s,onChange:e=>c(e.target.value),placeholder:`Search`,className:`w-full bg-transparent outline-none placeholder:text-muted`})]})]})]}),d===`answers`?(0,M.jsxs)(M.Fragment,{children:[(0,M.jsx)(ne,{answers:e.answers,onChange:n=>{t({...e,answers:n}),ue({data:{email:h.email,answers:n}}).then(()=>{E(e=>[...e.filter(e=>e.author!==h.name),{author:h.name,body:n}]),m(`Saved under ${h.name}`)}).catch(()=>m(`Could not save answers.`))}}),T.filter(e=>e.author!==h.name).length>0&&(0,M.jsxs)(`section`,{className:`mx-auto max-w-5xl space-y-3 px-4 pb-8`,children:[(0,M.jsx)(`h2`,{className:`text-sm font-semibold`,children:`Everyone else's answers`}),T.filter(e=>e.author!==h.name).map(e=>(0,M.jsxs)(`article`,{className:`rounded-xl border border-border bg-surface p-4 text-sm`,children:[(0,M.jsx)(`p`,{className:`font-medium`,children:e.author}),(0,M.jsx)(`p`,{className:`mt-2 whitespace-pre-wrap text-muted`,children:e.body.sow.building||`No scope written yet.`})]},e.author))]})]}):d===`people`?(0,M.jsx)(ae,{}):(0,M.jsxs)(`main`,{className:`mx-auto max-w-5xl px-4 py-6`,children:[(0,M.jsxs)(`section`,{className:`mb-6 rounded-xl border border-border bg-surface p-4`,children:[(0,M.jsxs)(`div`,{className:`mb-2 flex items-center justify-between gap-3`,children:[(0,M.jsx)(`h2`,{className:`text-sm font-semibold`,children:`Team comments`}),(0,M.jsx)(`button`,{type:`button`,className:`min-h-11 text-sm text-primary`,onClick:()=>{G({data:{email:h.email}}).then(e=>{w(e.comments),E(e.answers),e.goals.length>0&&t(t=>t&&{...t,goals:e.goals}),m(`Team comments updated`)}).catch(()=>m(`Could not refresh comments.`))},children:`Refresh`})]}),C.length===0?(0,M.jsx)(`p`,{className:`text-sm text-muted`,children:`No comments yet. A comment here is visible to Mary, Jay, and Ben.`}):(0,M.jsx)(`ul`,{className:`space-y-2`,children:C.map(t=>{let n=e.goals.find(e=>e.id===t.goal_id);return(0,M.jsxs)(`li`,{className:`text-sm`,children:[(0,M.jsx)(`span`,{className:`font-medium`,children:t.author}),(0,M.jsxs)(`span`,{className:`text-muted`,children:[` `,`on `,n?n.title:`a goal`,`: `,t.body]}),t.author===k.name&&(0,M.jsx)(Le,{onEdit:e=>I(t.id,e),onDelete:()=>L(t.id),body:t.body})]},t.id)})})]}),Z.filter(e=>n===`all`||n===e.id).map(t=>{let n=N.filter(e=>e.week===t.id).sort((e,t)=>e.number-t.number);return(0,M.jsxs)(`section`,{className:`mb-8`,children:[(0,M.jsxs)(`div`,{className:`mb-3 flex items-baseline justify-between gap-3`,children:[(0,M.jsxs)(`h2`,{className:`font-mono text-xs tracking-widest text-muted uppercase`,children:[t.label,` · `,t.range,` 2026`]}),!O&&(0,M.jsx)(`button`,{type:`button`,className:`text-sm text-primary`,onClick:()=>u({kind:`goal`,isNew:!0,goal:ke(e.goals,t.id)}),children:`Add goal`})]}),n.length===0?(0,M.jsx)(`p`,{className:`rounded-xl border border-dashed border-border px-4 py-8 text-center text-sm text-muted`,children:`Nothing planned for this week yet.`}):n.map(e=>(0,M.jsx)(je,{goal:e,onEdit:()=>u({kind:`goal`,isNew:!1,goal:structuredClone(e)}),onRename:t=>F(n=>({...n,goals:n.goals.map(n=>n.id===e.id?{...n,title:t}:n)})),onDelete:()=>{confirm(`Delete this goal and its milestones?`)&&F(t=>({...t,goals:t.goals.filter(t=>t.id!==e.id)}))},onAddMs:()=>u({kind:`ms`,gid:e.id,isNew:!0,ms:{id:Ee(),title:``,status:`not_started`,due:``,notes:``}}),onEditMs:t=>u({kind:`ms`,gid:e.id,isNew:!1,ms:structuredClone(t)}),onRenameMs:(t,n)=>F(r=>({...r,goals:r.goals.map(r=>r.id===e.id?{...r,milestones:r.milestones.map(e=>e.id===t?{...e,title:n}:e)}:r)})),onStatus:(t,n)=>{P(r=>({...r,goals:r.goals.map(r=>r.id===e.id?{...r,milestones:r.milestones.map(e=>e.id===t?{...e,status:n}:e)}:r)})),q({data:{email:h.email,goalId:e.id,milestoneId:t,status:n}}).catch(()=>m(`Could not save the status.`))},onDue:(t,n)=>{P(r=>({...r,goals:r.goals.map(r=>r.id===e.id?{...r,milestones:r.milestones.map(e=>e.id===t?{...e,due:n}:e)}:r)})),q({data:{email:h.email,goalId:e.id,milestoneId:t,due:n}}).catch(()=>m(`Could not save the due date.`))},onNotes:(t,n)=>F(r=>({...r,goals:r.goals.map(r=>r.id===e.id?{...r,milestones:r.milestones.map(e=>e.id===t?{...e,notes:n}:e)}:r)})),onDeleteMs:t=>F(n=>({...n,goals:n.goals.map(n=>n.id===e.id?{...n,milestones:n.milestones.filter(e=>e.id!==t)}:n)})),locked:O,comments:C.filter(t=>t.goal_id===e.id),me:k.name,onComment:t=>{de({data:{email:h.email,goalId:e.id,body:t}}).then(e=>w(t=>[...t,e])).catch(()=>m(`Could not add the comment.`))},onEditComment:I,onDeleteComment:L},e.id))]},t.id)})]}),l&&(0,M.jsx)(Fe,{draft:l,onClose:()=>u(null),onSave:e=>{e.kind===`goal`?F(t=>({...t,goals:e.isNew?[...t.goals,e.goal]:t.goals.map(t=>t.id===e.goal.id?e.goal:t)})):F(t=>({...t,goals:t.goals.map(t=>t.id===e.gid?{...t,milestones:e.isNew?[...t.milestones,e.ms]:t.milestones.map(t=>t.id===e.ms.id?e.ms:t)}:t)})),u(null)}}),p&&(0,M.jsx)(`p`,{className:`fixed right-4 bottom-4 rounded-lg border border-border bg-surface px-4 py-2 text-sm`,children:p})]})}function ke(e,t){return{id:Ee(),week:t,number:we(e,t),title:``,description:``,notes:``,due:``,milestones:[]}}function Q({label:e,value:t}){return(0,M.jsxs)(`div`,{className:`min-w-20 rounded-lg border border-border bg-surface px-3 py-2`,children:[(0,M.jsx)(`dt`,{className:`text-xs text-muted`,children:e}),(0,M.jsx)(`dd`,{className:`text-lg font-semibold leading-none`,children:t})]})}function Ae({label:e,onClick:t,children:n}){return(0,M.jsxs)(`button`,{type:`button`,"aria-label":e,className:`inline-flex min-h-11 items-center gap-2 rounded-lg border border-border bg-surface px-3 text-sm`,onClick:t,children:[n,(0,M.jsx)(`span`,{children:e})]})}function je({goal:e,onEdit:t,onRename:n,onDelete:r,onAddMs:i,onEditMs:a,onRenameMs:o,onStatus:s,onDue:c,onNotes:l,onDeleteMs:u,locked:d,comments:f,me:m,onComment:h,onEditComment:g,onDeleteComment:ee}){let _=Te(e),[v,y]=(0,S.useState)({}),b=e.milestones.length>0&&e.milestones.every(e=>v[e.id]);return(0,M.jsxs)(`article`,{className:`mb-3 overflow-hidden rounded-xl border border-border bg-surface`,children:[(0,M.jsxs)(`div`,{className:`flex gap-3 p-4`,children:[(0,M.jsxs)(`span`,{className:`mt-0.5 h-fit rounded-md bg-primary/15 px-2 py-1 font-mono text-xs text-primary`,children:[`G`,e.number]}),(0,M.jsxs)(`div`,{className:`min-w-0 flex-1`,children:[(0,M.jsx)(Me,{label:`Goal name`,value:e.title,locked:d,onSave:n}),e.description&&(0,M.jsx)(`p`,{className:`mt-1 text-sm leading-relaxed whitespace-pre-wrap text-muted`,children:e.description}),e.notes&&(0,M.jsx)(`p`,{className:`mt-2 text-sm whitespace-pre-wrap`,children:e.notes})]}),(0,M.jsxs)(`div`,{className:`hidden w-28 shrink-0 text-right sm:block`,children:[(0,M.jsx)(`div`,{className:`h-1.5 overflow-hidden rounded-full bg-surface-2`,children:(0,M.jsx)(`div`,{className:`h-full bg-primary`,style:{width:`${_.pct}%`}})}),(0,M.jsxs)(`p`,{className:`mt-1 text-xs text-muted`,children:[_.done,`/`,_.total,e.due?` · ${e.due}`:``]})]})]}),(0,M.jsx)(`div`,{className:`flex justify-end border-t border-border px-4 py-2`,children:(0,M.jsx)(`button`,{type:`button`,className:`min-h-11 text-sm text-primary`,onClick:()=>y(b?{}:Object.fromEntries(e.milestones.map(e=>[e.id,!0]))),children:b?`Minimise all`:`Maximise all`})}),(0,M.jsx)(`ul`,{children:e.milestones.map(e=>{let t=!!v[e.id];return(0,M.jsxs)(`li`,{className:`border-t border-border`,children:[(0,M.jsxs)(`div`,{className:`grid gap-2 px-4 py-3 sm:grid-cols-[auto_1fr_9.5rem_9rem_auto] sm:items-start`,children:[(0,M.jsx)(Pe,{status:e.status}),(0,M.jsxs)(`div`,{className:`flex min-w-0 items-start gap-2`,children:[(0,M.jsx)(`button`,{type:`button`,className:`mt-2 shrink-0 text-sm font-medium`,"aria-expanded":t,"aria-label":t?`Minimise milestone`:`Maximise milestone`,onClick:()=>y(t=>({...t,[e.id]:!t[e.id]})),children:t?`▾`:`▸`}),(0,M.jsx)(Me,{label:`Milestone name`,value:e.title,locked:d,compact:!0,onSave:t=>o(e.id,t)})]}),(0,M.jsx)(`select`,{"aria-label":`Status`,className:`min-h-11 rounded-lg border border-border bg-bg px-2 text-sm`,value:e.status,onChange:t=>s(e.id,t.target.value),children:X.map(e=>(0,M.jsx)(`option`,{value:e.id,children:e.label},e.id))}),(0,M.jsxs)(`label`,{className:`flex min-h-11 items-center gap-2 rounded-lg border border-border bg-bg px-2 text-sm`,children:[(0,M.jsx)(p,{size:14,className:`shrink-0 text-muted`}),(0,M.jsx)(`input`,{type:`date`,"aria-label":`Due date`,className:`w-full bg-transparent outline-none`,value:e.due,onChange:t=>c(e.id,t.target.value)})]}),!d&&(0,M.jsxs)(`div`,{className:`flex gap-1`,children:[(0,M.jsx)(`button`,{type:`button`,className:`min-h-11 px-2 text-sm text-muted`,onClick:()=>a(e),children:`Edit`}),(0,M.jsx)(`button`,{type:`button`,"aria-label":`Delete milestone`,className:`min-h-11 px-2 text-alert`,onClick:()=>u(e.id),children:(0,M.jsx)(x,{size:16})})]})]}),t&&(0,M.jsx)(Ne,{notes:e.notes,locked:d,label:e.title,onSave:t=>l(e.id,t)})]},e.id)})}),!d&&(0,M.jsxs)(`div`,{className:`flex justify-between border-t border-border px-4 py-2`,children:[(0,M.jsx)(`button`,{type:`button`,className:`min-h-11 text-sm text-primary`,onClick:i,children:`Add milestone`}),(0,M.jsxs)(`div`,{className:`flex gap-3`,children:[(0,M.jsx)(`button`,{type:`button`,className:`min-h-11 text-sm`,onClick:t,children:`Edit goal`}),(0,M.jsx)(`button`,{type:`button`,className:`min-h-11 text-sm text-alert`,onClick:r,children:`Delete`})]})]}),(0,M.jsx)(Re,{comments:f,me:m,onComment:h,onEditComment:g,onDeleteComment:ee})]})}function Me({label:e,value:t,locked:n,compact:r,onSave:i}){let[a,o]=(0,S.useState)(t);(0,S.useEffect)(()=>o(t),[t]);let s=r?`text-sm font-medium`:`text-base font-semibold`;return n?(0,M.jsx)(`p`,{className:s,children:t}):(0,M.jsx)(`input`,{className:`min-h-11 w-full rounded-lg border border-transparent bg-transparent px-2 outline-none hover:border-border focus:border-primary ${s}`,"aria-label":e,value:a,onChange:e=>o(e.target.value),onBlur:()=>{let e=a.trim();if(!e||e===t){o(t);return}i(e)}})}function Ne({notes:e,locked:t,label:n,onSave:r}){let[i,a]=(0,S.useState)(e);return(0,S.useEffect)(()=>a(e),[e]),(0,M.jsx)(`div`,{className:`border-t border-border bg-bg/40 px-4 py-3`,children:t?(0,M.jsx)(`p`,{className:`text-sm leading-relaxed whitespace-pre-wrap`,children:e}):(0,M.jsx)(`textarea`,{className:`field min-h-40 font-sans text-sm leading-relaxed`,"aria-label":`Edit ${n}`,value:i,onChange:e=>a(e.target.value),onBlur:()=>{i!==e&&r(i)}})})}function Pe({status:e}){let t=`mt-1 text-muted`;return e===`done`?(0,M.jsx)(m,{size:16,className:`mt-1 text-primary`}):e===`blocked`?(0,M.jsx)(_,{size:16,className:`mt-1 text-alert`}):e===`in_progress`?(0,M.jsx)(h,{size:16,className:t}):(0,M.jsx)(g,{size:16,className:t})}function Fe({draft:e,onClose:t,onSave:n}){let[r,i]=(0,S.useState)(e),a=r.kind===`goal`?r.goal:null,o=r.kind===`ms`?r.ms:null;return(0,M.jsx)(`div`,{className:`fixed inset-0 z-40 flex items-start justify-center bg-bg/70 px-4 pt-16`,children:(0,M.jsxs)(`form`,{className:`max-h-[85vh] w-full max-w-3xl overflow-y-auto rounded-xl border border-border bg-surface p-4`,onSubmit:e=>{e.preventDefault(),(r.kind!==`goal`||r.goal.title.trim())&&(r.kind!==`ms`||r.ms.title.trim())&&n(r)},children:[(0,M.jsx)(`h2`,{className:`mb-3 text-base font-semibold`,children:r.kind===`goal`?r.isNew?`New goal`:`Edit goal`:r.isNew?`New milestone`:`Edit milestone`}),a&&(0,M.jsxs)(M.Fragment,{children:[(0,M.jsx)($,{label:`Week`,children:(0,M.jsx)(`select`,{className:`field`,value:a.week,onChange:e=>i({...r,kind:`goal`,goal:{...a,week:e.target.value}}),children:Z.map(e=>(0,M.jsxs)(`option`,{value:e.id,children:[e.label,` · `,e.range]},e.id))})}),(0,M.jsx)($,{label:`Number`,children:(0,M.jsx)(`input`,{className:`field`,type:`number`,min:1,value:a.number,onChange:e=>i({...r,kind:`goal`,goal:{...a,number:Number(e.target.value)||1}})})}),(0,M.jsx)($,{label:`Title`,children:(0,M.jsx)(`input`,{className:`field`,value:a.title,required:!0,onChange:e=>i({...r,kind:`goal`,goal:{...a,title:e.target.value}})})}),(0,M.jsx)($,{label:`Description`,children:(0,M.jsx)(`textarea`,{className:`field min-h-24`,value:a.description,onChange:e=>i({...r,kind:`goal`,goal:{...a,description:e.target.value}})})}),(0,M.jsx)($,{label:`Due`,children:(0,M.jsx)(`input`,{className:`field`,type:`date`,value:a.due,onChange:e=>i({...r,kind:`goal`,goal:{...a,due:e.target.value}})})}),(0,M.jsx)($,{label:`Notes`,children:(0,M.jsx)(`textarea`,{className:`field min-h-20`,value:a.notes,onChange:e=>i({...r,kind:`goal`,goal:{...a,notes:e.target.value}})})})]}),o&&(0,M.jsxs)(M.Fragment,{children:[(0,M.jsx)($,{label:`Title`,children:(0,M.jsx)(`input`,{className:`field`,required:!0,value:o.title,onChange:e=>{let t=e.target.value;i(e=>e.kind===`ms`?{...e,ms:{...e.ms,title:t}}:e)}})}),(0,M.jsx)($,{label:`Status`,children:(0,M.jsx)(`select`,{className:`field`,value:o.status,onChange:e=>{let t=e.target.value;i(e=>e.kind===`ms`?{...e,ms:{...e.ms,status:t}}:e)},children:X.map(e=>(0,M.jsx)(`option`,{value:e.id,children:e.label},e.id))})}),(0,M.jsx)($,{label:`Due`,children:(0,M.jsx)(`input`,{className:`field`,type:`date`,value:o.due,onChange:e=>{let t=e.target.value;i(e=>e.kind===`ms`?{...e,ms:{...e.ms,due:t}}:e)}})}),(0,M.jsx)($,{label:`Notes`,children:(0,M.jsx)(`textarea`,{className:`field min-h-64`,value:o.notes,onChange:e=>{let t=e.target.value;i(e=>e.kind===`ms`?{...e,ms:{...e.ms,notes:t}}:e)}})})]}),(0,M.jsxs)(`div`,{className:`mt-4 flex justify-end gap-2`,children:[(0,M.jsx)(`button`,{type:`button`,className:`min-h-11 rounded-lg border border-border px-4 text-sm`,onClick:t,children:`Cancel`}),(0,M.jsx)(`button`,{type:`submit`,className:`min-h-11 rounded-lg bg-primary px-4 text-sm font-semibold text-primary-ink`,children:`Save`})]})]})})}function $({label:e,children:t}){return(0,M.jsxs)(`label`,{className:`mb-3 block text-sm text-muted`,children:[e,(0,M.jsx)(`div`,{className:`mt-1 text-fg`,children:t})]})}function Ie({onMatch:e}){let[t,n]=(0,S.useState)(``),[r,i]=(0,S.useState)(``);return(0,M.jsx)(`main`,{className:`grid min-h-screen place-items-center bg-bg px-4 text-fg`,children:(0,M.jsxs)(`form`,{className:`w-full max-w-md space-y-3 rounded-xl border border-border bg-surface p-5`,onSubmit:n=>{n.preventDefault();let r=ie(t);if(!r){i(`That email is not on the team.`);return}e(r)},children:[(0,M.jsx)(`p`,{className:`font-mono text-xs tracking-widest text-primary uppercase`,children:`Hyrax`}),(0,M.jsx)(`h1`,{className:`text-xl font-semibold`,children:`Team link`}),(0,M.jsx)(`p`,{className:`text-sm leading-relaxed text-muted`,children:`Enter the email already on the team list. No Google account. If it matches, you can comment and add answers under your name.`}),(0,M.jsx)(`input`,{className:`field`,type:`text`,inputMode:`email`,required:!0,autoComplete:`email`,placeholder:`Email`,value:t,onChange:e=>n(e.target.value)}),r&&(0,M.jsx)(`p`,{className:`text-sm text-alert`,children:r}),(0,M.jsx)(`button`,{type:`submit`,className:`min-h-11 w-full rounded-lg bg-primary text-sm font-semibold text-primary-ink`,children:`Continue`})]})})}function Le({body:e,onEdit:t,onDelete:n}){let[r,i]=(0,S.useState)(!1),[a,o]=(0,S.useState)(e);return r?(0,M.jsxs)(`form`,{className:`mt-2 flex gap-2`,onSubmit:e=>{e.preventDefault(),a.trim()&&(t(a.trim()),i(!1))},children:[(0,M.jsx)(`input`,{className:`field`,value:a,onChange:e=>o(e.target.value)}),(0,M.jsx)(`button`,{type:`submit`,className:`min-h-11 rounded-lg border border-border px-3 text-sm`,children:`Save`}),(0,M.jsx)(`button`,{type:`button`,className:`min-h-11 px-2 text-sm text-muted`,onClick:()=>i(!1),children:`Cancel`})]}):(0,M.jsxs)(`span`,{className:`ml-2 inline-flex gap-2`,children:[(0,M.jsx)(`button`,{type:`button`,className:`text-sm text-primary`,onClick:()=>{o(e),i(!0)},children:`Edit`}),(0,M.jsx)(`button`,{type:`button`,className:`text-sm text-alert`,onClick:()=>{confirm(`Delete your comment?`)&&n()},children:`Delete`})]})}function Re({comments:e,me:t,onComment:n,onEditComment:r,onDeleteComment:i}){let[a,o]=(0,S.useState)(``);return(0,M.jsxs)(`div`,{className:`space-y-2 border-t border-border px-4 py-3`,children:[e.map(e=>(0,M.jsxs)(`div`,{className:`text-sm`,children:[(0,M.jsxs)(`span`,{className:`font-medium`,children:[e.author,`.`]}),` `,(0,M.jsx)(`span`,{className:`text-muted`,children:e.body}),e.author===t&&(0,M.jsx)(Le,{body:e.body,onEdit:t=>r(e.id,t),onDelete:()=>i(e.id)})]},e.id)),(0,M.jsxs)(`form`,{className:`flex gap-2`,onSubmit:e=>{e.preventDefault(),a.trim()&&(n(a.trim()),o(``))},children:[(0,M.jsx)(`input`,{className:`field`,value:a,placeholder:`Comment under your name`,onChange:e=>o(e.target.value)}),(0,M.jsx)(`button`,{type:`submit`,className:`min-h-11 rounded-lg border border-border px-3 text-sm`,children:`Comment`})]})]})}export{Oe as n,Ie as t};