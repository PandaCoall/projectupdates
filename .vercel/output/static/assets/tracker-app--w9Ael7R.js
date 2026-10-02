import{a as e,c as t,d as n,i as r,l as i,n as a,o,s,t as c,u as l}from"./index-btVJK028.js";function u(e){if(Array.isArray(e))return e.flatMap(e=>u(e));if(typeof e!=`string`)return[];let t=[],n=0,r,i,a,o,s,c=()=>{for(;n<e.length&&/\s/.test(e.charAt(n));)n+=1;return n<e.length},l=()=>(i=e.charAt(n),i!==`=`&&i!==`;`&&i!==`,`);for(;n<e.length;){for(r=n,s=!1;c();)if(i=e.charAt(n),i===`,`){for(a=n,n+=1,c(),o=n;n<e.length&&l();)n+=1;n<e.length&&e.charAt(n)===`=`?(s=!0,n=o,t.push(e.slice(r,a)),r=n):n=a+1}else n+=1;(!s||n>=e.length)&&t.push(e.slice(r))}return t}function d(e){return e instanceof Headers?e:Array.isArray(e)||typeof e==`object`?new Headers(e):null}function f(...e){return e.reduce((e,t)=>{let n=d(t);if(!n)return e;for(let[t,r]of n.entries())t===`set-cookie`?u(r).forEach(t=>e.append(`set-cookie`,t)):e.set(t,r);return e},new Headers)}var p=c(`calendar`,[[`path`,{d:`M8 2v4`,key:`1cmpym`}],[`path`,{d:`M16 2v4`,key:`4m81vk`}],[`rect`,{width:`18`,height:`18`,x:`3`,y:`4`,rx:`2`,key:`1hopcy`}],[`path`,{d:`M3 10h18`,key:`8toen8`}]]),m=c(`circle-check`,[[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}],[`path`,{d:`m9 12 2 2 4-4`,key:`dzmm74`}]]),h=c(`circle-dashed`,[[`path`,{d:`M10.1 2.182a10 10 0 0 1 3.8 0`,key:`5ilxe3`}],[`path`,{d:`M13.9 21.818a10 10 0 0 1-3.8 0`,key:`11zvb9`}],[`path`,{d:`M17.609 3.721a10 10 0 0 1 2.69 2.7`,key:`1iw5b2`}],[`path`,{d:`M2.182 13.9a10 10 0 0 1 0-3.8`,key:`c0bmvh`}],[`path`,{d:`M20.279 17.609a10 10 0 0 1-2.7 2.69`,key:`1ruxm7`}],[`path`,{d:`M21.818 10.1a10 10 0 0 1 0 3.8`,key:`qkgqxc`}],[`path`,{d:`M3.721 6.391a10 10 0 0 1 2.7-2.69`,key:`1mcia2`}],[`path`,{d:`M6.391 20.279a10 10 0 0 1-2.69-2.7`,key:`1fvljs`}]]),g=c(`circle`,[[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}]]),_=c(`download`,[[`path`,{d:`M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4`,key:`ih7n3h`}],[`polyline`,{points:`7 10 12 15 17 10`,key:`2ggqvy`}],[`line`,{x1:`12`,x2:`12`,y1:`15`,y2:`3`,key:`1vk2je`}]]),v=c(`octagon-alert`,[[`path`,{d:`M12 16h.01`,key:`1drbdi`}],[`path`,{d:`M12 8v4`,key:`1got3b`}],[`path`,{d:`M15.312 2a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586l-4.688-4.688A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2z`,key:`1fd625`}]]),y=c(`plus`,[[`path`,{d:`M5 12h14`,key:`1ays0h`}],[`path`,{d:`M12 5v14`,key:`s699le`}]]),ee=c(`rotate-ccw`,[[`path`,{d:`M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8`,key:`1357e3`}],[`path`,{d:`M3 3v5h5`,key:`1xhq8a`}]]),te=c(`search`,[[`path`,{d:`m21 21-4.34-4.34`,key:`14j7rj`}],[`circle`,{cx:`11`,cy:`11`,r:`8`,key:`4ej97u`}]]),b=c(`trash-2`,[[`path`,{d:`M3 6h18`,key:`d0wm0j`}],[`path`,{d:`M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6`,key:`4alrt4`}],[`path`,{d:`M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2`,key:`v07s0e`}],[`line`,{x1:`10`,x2:`10`,y1:`11`,y2:`17`,key:`1uufr5`}],[`line`,{x1:`14`,x2:`14`,y1:`11`,y2:`17`,key:`xtxkd`}]]),ne=c(`upload`,[[`path`,{d:`M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4`,key:`ih7n3h`}],[`polyline`,{points:`17 8 12 3 7 8`,key:`t8dd8p`}],[`line`,{x1:`12`,x2:`12`,y1:`3`,y2:`15`,key:`widbto`}]]),x=n(l(),1),S=[{id:`human`,label:`Human approval`},{id:`ai`,label:`AI-driven`},{id:`deterministic`,label:`Deterministic`},{id:`async`,label:`Background`},{id:`external`,label:`External provider`}],C=[{key:`repeatability`,label:`Repeatable recipes`},{key:`api`,label:`Headless / API call from Hyrax`},{key:`queue`,label:`Queue large job volumes`},{key:`versioning`,label:`Version the workflows`},{key:`scale`,label:`Scale workers independently`},{key:`swap`,label:`Swap a model without redesigning Hyrax`}];function w(){return crypto.randomUUID()}function T(e=``){return{id:w(),text:e}}function E(e,t,n){return{id:w(),name:e,evidence:t,owner:n}}function D(){return[E(`Working pilot path`,`A complete job runs in the deployed environment and produces the agreed editor handoff`,`Mary with engineering support`),E(`Recipe and provider decision`,`Versioned inputs, results, failures, cost and editor assessment from the bounded comparison`,`Mary and senior engineer`),E(`Retained asset library`,`Approved segments can be found and used; unapproved or restricted ranges cannot be rendered`,`Mary; editor owns usability approval`),E(`Review and approval path`,`A correction creates a new version; acceptance and release decisions remain distinct`,`Editors and release owner`),E(`Specification and operating guide`,`Data contracts, deployment, recovery, access and known limitations documented`,`Mary and senior engineer`),E(`Measurement report`,`Matched baseline and pilot timings, accepted outcomes, cost and failure analysis`,`Mary and lead editor`)]}var O=()=>({floyo:``,comfy:``,hosted:``});function k(){return{sow:{building:``,inScope:[T()],outOfScope:[T()],deliverables:D(),path:[T(`UGC / presenter`),T(`B-roll`),T(`Captions`),T(`Voice / audio`),T(`Music / sound`),T(`CTA / end frame`),T(`Assembled first cut`)],acceptance:``,flags:[{id:w(),concern:``,alternative:``}]},flow:[`Campaign / product rules`,`Job creation and budget`,`Asset retrieval or generation`,`Private storage and rights`,`Analysis and search`,`Creative Manifest`,`Deterministic render`,`QA checks`,`Editor review`,`Named approval`].map(e=>({id:w(),title:e,kind:`deterministic`,detail:``})),requirements:[{id:w(),item:``,from:`Hyrax`,stage:`Before build`,blocker:!1,notes:``}],generation:{recommendation:``,repeatability:O(),api:O(),queue:O(),versioning:O(),scale:O(),swap:O()}}}function re(e){let t=e.answers??k(),n=t.sow.deliverables,r=n.every(e=>typeof e.name==`string`)?n:n.some(e=>e.text)?n.map(e=>({id:e.id,name:e.text??``,evidence:e.evidence??``,owner:e.owner??``})):D();return{...e,answers:{...t,sow:{...t.sow,deliverables:r}}}}var A=r();function j(){return crypto.randomUUID()}function ie({answers:e,onChange:t}){let n=e.sow;function r(r){t({...e,sow:{...n,...r}})}return(0,A.jsxs)(`main`,{className:`mx-auto max-w-5xl space-y-8 px-4 py-6`,children:[(0,A.jsx)(`p`,{className:`text-sm text-muted`,children:`Write the October answers here in the shape they need to be delivered. The technical specification and the development pipeline are not in this tracker.`}),(0,A.jsxs)(P,{kicker:`Goal 1`,title:`Scope of work`,children:[(0,A.jsx)(F,{text:`What we are building`,children:(0,A.jsx)(`textarea`,{className:`field min-h-28`,value:n.building,onChange:e=>r({building:e.target.value}),placeholder:`One short statement of the October product.`})}),(0,A.jsx)(L,{label:`In scope`,items:n.inScope,onChange:e=>r({inScope:e}),placeholder:`One in-scope item`}),(0,A.jsx)(L,{label:`Out of scope`,items:n.outOfScope,onChange:e=>r({outOfScope:e}),placeholder:`One out-of-scope item`}),(0,A.jsx)(I,{rows:n.deliverables,onChange:e=>r({deliverables:e})}),(0,A.jsx)(L,{label:`Basic path that must exist in the first cut`,items:n.path,onChange:e=>r({path:e}),placeholder:`Path item`}),(0,A.jsx)(F,{text:`Editor acceptance bar`,children:(0,A.jsx)(`textarea`,{className:`field min-h-24`,value:n.acceptance,onChange:e=>r({acceptance:e.target.value}),placeholder:`What has to be true for an editor to prefer this first cut over a blank timeline.`})}),(0,A.jsxs)(`div`,{children:[(0,A.jsx)(`p`,{className:`mb-2 text-sm text-muted`,children:`Flags and simpler alternatives`}),(0,A.jsx)(`ul`,{className:`space-y-2`,children:n.flags.map(e=>(0,A.jsxs)(`li`,{className:`grid gap-2 rounded-xl border border-border bg-surface p-3 sm:grid-cols-[1fr_1fr_auto]`,children:[(0,A.jsx)(`input`,{className:`field`,value:e.concern,placeholder:`What looks unrealistic or unnecessary`,onChange:t=>r({flags:n.flags.map(n=>n.id===e.id?{...n,concern:t.target.value}:n)})}),(0,A.jsx)(`input`,{className:`field`,value:e.alternative,placeholder:`Simpler alternative`,onChange:t=>r({flags:n.flags.map(n=>n.id===e.id?{...n,alternative:t.target.value}:n)})}),(0,A.jsx)(`button`,{type:`button`,"aria-label":`Remove flag`,className:`min-h-11 text-alert`,onClick:()=>r({flags:n.flags.filter(t=>t.id!==e.id)}),children:(0,A.jsx)(b,{size:16})})]},e.id))}),(0,A.jsxs)(`button`,{type:`button`,className:`mt-2 inline-flex min-h-11 items-center gap-1 text-sm text-primary`,onClick:()=>r({flags:[...n.flags,{id:j(),concern:``,alternative:``}]}),children:[(0,A.jsx)(y,{size:14}),` Flag`]})]})]}),(0,A.jsxs)(P,{kicker:`Goal 2`,title:`Process flowchart`,children:[(0,A.jsx)(`p`,{className:`text-sm text-muted`,children:`Each box is a hand-off. Mark whether it is a person, an AI proposal, deterministic software, background work, or an outside provider.`}),(0,A.jsx)(`ol`,{className:`relative space-y-0 border-l border-border pl-4`,children:e.flow.map((n,r)=>(0,A.jsxs)(`li`,{className:`relative pb-4`,children:[(0,A.jsx)(`span`,{className:`absolute top-4 -left-[1.3rem] size-2.5 rounded-full bg-primary`}),(0,A.jsxs)(`div`,{className:`rounded-xl border border-border bg-surface p-3`,children:[(0,A.jsxs)(`div`,{className:`mb-2 flex flex-wrap items-center gap-2`,children:[(0,A.jsx)(`span`,{className:`font-mono text-xs text-muted`,children:String(r).padStart(2,`0`)}),(0,A.jsx)(`input`,{className:`field min-w-40 flex-1`,value:n.title,onChange:r=>M(e,t,n.id,{title:r.target.value})}),(0,A.jsx)(`select`,{className:`field w-auto`,value:n.kind,"aria-label":`Step type`,onChange:r=>M(e,t,n.id,{kind:r.target.value}),children:S.map(e=>(0,A.jsx)(`option`,{value:e.id,children:e.label},e.id))}),(0,A.jsx)(`button`,{type:`button`,"aria-label":`Remove step`,className:`min-h-11 px-2 text-alert`,onClick:()=>t({...e,flow:e.flow.filter(e=>e.id!==n.id)}),children:(0,A.jsx)(b,{size:16})})]}),(0,A.jsx)(`textarea`,{className:`field min-h-16`,value:n.detail,placeholder:`What happens, what is handed on, and where it can stop.`,onChange:r=>M(e,t,n.id,{detail:r.target.value})})]})]},n.id))}),(0,A.jsxs)(`button`,{type:`button`,className:`inline-flex min-h-11 items-center gap-1 text-sm text-primary`,onClick:()=>t({...e,flow:[...e.flow,{id:j(),title:``,kind:`deterministic`,detail:``}]}),children:[(0,A.jsx)(y,{size:14}),` Step`]})]}),(0,A.jsxs)(P,{kicker:`Goal 4`,title:`Requirements and dependencies`,children:[(0,A.jsx)(`p`,{className:`text-sm text-muted`,children:`One row per thing you need. Say who provides it, which stage needs it, and whether work actually stops without it.`}),(0,A.jsx)(`ul`,{className:`space-y-3`,children:e.requirements.map(n=>(0,A.jsx)(`li`,{className:`rounded-xl border border-border bg-surface p-3`,children:(0,A.jsxs)(`div`,{className:`grid gap-2 sm:grid-cols-2`,children:[(0,A.jsx)(`input`,{className:`field sm:col-span-2`,value:n.item,placeholder:`Account, asset, decision, or access`,onChange:r=>N(e,t,n.id,{item:r.target.value})}),(0,A.jsxs)(`select`,{className:`field`,value:n.from,"aria-label":`Provided by`,onChange:r=>N(e,t,n.id,{from:r.target.value}),children:[(0,A.jsx)(`option`,{value:`Hyrax`,children:`From Hyrax`}),(0,A.jsx)(`option`,{value:`Mary`,children:`From Mary`}),(0,A.jsx)(`option`,{value:`Both`,children:`Both`})]}),(0,A.jsx)(`input`,{className:`field`,value:n.stage,placeholder:`Stage that needs it`,onChange:r=>N(e,t,n.id,{stage:r.target.value})}),(0,A.jsxs)(`label`,{className:`flex min-h-11 items-center gap-2 text-sm`,children:[(0,A.jsx)(`input`,{type:`checkbox`,checked:n.blocker,onChange:r=>N(e,t,n.id,{blocker:r.target.checked})}),`Hard blocker`]}),(0,A.jsx)(`button`,{type:`button`,className:`min-h-11 text-left text-sm text-alert`,onClick:()=>t({...e,requirements:e.requirements.filter(e=>e.id!==n.id)}),children:`Remove`}),(0,A.jsx)(`textarea`,{className:`field min-h-16 sm:col-span-2`,value:n.notes,placeholder:`Notes`,onChange:r=>N(e,t,n.id,{notes:r.target.value})})]})},n.id))}),(0,A.jsxs)(`button`,{type:`button`,className:`inline-flex min-h-11 items-center gap-1 text-sm text-primary`,onClick:()=>t({...e,requirements:[...e.requirements,{id:j(),item:``,from:`Hyrax`,stage:``,blocker:!1,notes:``}]}),children:[(0,A.jsx)(y,{size:14}),` Requirement`]})]}),(0,A.jsxs)(P,{kicker:`Goal 5`,title:`Generation layer`,children:[(0,A.jsx)(`p`,{className:`text-sm text-muted`,children:`Floyo, self-hosted ComfyUI, or a hosted API as the recipe layer under Hyrax. The gated build pipeline is not tracked here.`}),(0,A.jsx)(`div`,{className:`overflow-x-auto rounded-xl border border-border`,children:(0,A.jsxs)(`table`,{className:`w-full min-w-[40rem] border-collapse text-sm`,children:[(0,A.jsx)(`thead`,{children:(0,A.jsxs)(`tr`,{className:`border-b border-border bg-surface text-left text-muted`,children:[(0,A.jsx)(`th`,{className:`p-3 font-medium`,children:`Question`}),(0,A.jsx)(`th`,{className:`p-3 font-medium`,children:`Floyo`}),(0,A.jsx)(`th`,{className:`p-3 font-medium`,children:`Self-hosted ComfyUI`}),(0,A.jsx)(`th`,{className:`p-3 font-medium`,children:`Hosted API`})]})}),(0,A.jsx)(`tbody`,{children:C.map(n=>{let r=e.generation[n.key];return typeof r==`string`?null:(0,A.jsxs)(`tr`,{className:`border-b border-border align-top`,children:[(0,A.jsx)(`th`,{className:`p-3 text-left font-medium`,children:n.label}),[`floyo`,`comfy`,`hosted`].map(i=>(0,A.jsx)(`td`,{className:`p-2`,children:(0,A.jsx)(`textarea`,{className:`field min-h-20`,value:r[i],onChange:a=>t({...e,generation:{...e.generation,[n.key]:{...r,[i]:a.target.value}}})})},i))]},n.key)})})]})}),(0,A.jsx)(F,{text:`Recommendation`,children:(0,A.jsx)(`textarea`,{className:`field min-h-28`,value:e.generation.recommendation,placeholder:`The simplest option that is repeatable now and can scale or swap later.`,onChange:n=>t({...e,generation:{...e.generation,recommendation:n.target.value}})})})]})]})}function M(e,t,n,r){t({...e,flow:e.flow.map(e=>e.id===n?{...e,...r}:e)})}function N(e,t,n,r){t({...e,requirements:e.requirements.map(e=>e.id===n?{...e,...r}:e)})}function P({kicker:e,title:t,children:n}){return(0,A.jsxs)(`section`,{className:`space-y-4`,children:[(0,A.jsxs)(`header`,{children:[(0,A.jsx)(`p`,{className:`font-mono text-xs tracking-widest text-primary uppercase`,children:e}),(0,A.jsx)(`h2`,{className:`text-xl font-semibold`,children:t})]}),n]})}function F({text:e,children:t}){return(0,A.jsxs)(`label`,{className:`block text-sm text-muted`,children:[e,(0,A.jsx)(`div`,{className:`mt-1 text-fg`,children:t})]})}function I({rows:e,onChange:t}){function n(n,r){t(e.map(e=>e.id===n?{...e,...r}:e))}return(0,A.jsxs)(`div`,{children:[(0,A.jsx)(`p`,{className:`mb-2 text-sm font-semibold text-fg`,children:`Deliverables and owners`}),(0,A.jsx)(`div`,{className:`overflow-x-auto rounded-xl border border-border`,children:(0,A.jsxs)(`table`,{className:`w-full min-w-[40rem] border-collapse text-sm`,children:[(0,A.jsx)(`thead`,{children:(0,A.jsxs)(`tr`,{className:`bg-surface-2 text-left`,children:[(0,A.jsx)(`th`,{className:`w-[22%] p-3 font-semibold`,children:`Deliverable`}),(0,A.jsx)(`th`,{className:`p-3 font-semibold`,children:`Acceptance evidence`}),(0,A.jsx)(`th`,{className:`w-[24%] p-3 font-semibold`,children:`Accountable owner`}),(0,A.jsx)(`th`,{className:`w-12 p-3`})]})}),(0,A.jsx)(`tbody`,{children:e.map((r,i)=>(0,A.jsxs)(`tr`,{className:i%2==0?`border-t border-border bg-surface`:`border-t border-border bg-bg`,children:[(0,A.jsx)(`td`,{className:`p-2 align-top`,children:(0,A.jsx)(`textarea`,{className:`field min-h-20`,value:r.name,"aria-label":`Deliverable`,onChange:e=>n(r.id,{name:e.target.value})})}),(0,A.jsx)(`td`,{className:`p-2 align-top`,children:(0,A.jsx)(`textarea`,{className:`field min-h-20`,value:r.evidence,"aria-label":`Acceptance evidence`,onChange:e=>n(r.id,{evidence:e.target.value})})}),(0,A.jsx)(`td`,{className:`p-2 align-top`,children:(0,A.jsx)(`textarea`,{className:`field min-h-20`,value:r.owner,"aria-label":`Accountable owner`,onChange:e=>n(r.id,{owner:e.target.value})})}),(0,A.jsx)(`td`,{className:`p-2 align-top`,children:(0,A.jsx)(`button`,{type:`button`,"aria-label":`Remove deliverable`,className:`min-h-11 px-2 text-alert`,onClick:()=>t(e.filter(e=>e.id!==r.id)),children:(0,A.jsx)(b,{size:16})})})]},r.id))})]})}),(0,A.jsxs)(`button`,{type:`button`,className:`mt-2 inline-flex min-h-11 items-center gap-1 text-sm text-primary`,onClick:()=>t([...e,{id:j(),name:``,evidence:``,owner:``}]),children:[(0,A.jsx)(y,{size:14}),` Deliverable`]})]})}function L({label:e,items:t,onChange:n,placeholder:r}){return(0,A.jsxs)(`div`,{children:[(0,A.jsx)(`p`,{className:`mb-2 text-sm text-muted`,children:e}),(0,A.jsx)(`ul`,{className:`space-y-2`,children:t.map(i=>(0,A.jsxs)(`li`,{className:`flex gap-2`,children:[(0,A.jsx)(`input`,{className:`field`,value:i.text,placeholder:r,onChange:e=>n(t.map(t=>t.id===i.id?{...t,text:e.target.value}:t))}),(0,A.jsx)(`button`,{type:`button`,"aria-label":`Remove ${e}`,className:`min-h-11 px-2 text-alert`,onClick:()=>n(t.filter(e=>e.id!==i.id)),children:(0,A.jsx)(b,{size:16})})]},i.id))}),(0,A.jsxs)(`button`,{type:`button`,className:`mt-2 inline-flex min-h-11 items-center gap-1 text-sm text-primary`,onClick:()=>n([...t,{id:j(),text:``}]),children:[(0,A.jsx)(y,{size:14}),` Add`]})]})}var ae=[{name:`Mary`,email:`mary@hyraxteam`,role:`owner`},{name:`Jay`,email:`jeremiahworkpc@gmail.com`,role:`owner`},{name:`Ben`,email:`ben@hyrax.com`,role:`owner`}];function oe(e){let t=e.trim().toLowerCase();return ae.find(e=>e.email.toLowerCase()===t)??null}function se(){return(0,A.jsxs)(`main`,{className:`mx-auto max-w-3xl space-y-4 px-4 py-6`,children:[(0,A.jsxs)(`header`,{children:[(0,A.jsx)(`p`,{className:`font-mono text-xs tracking-widest text-primary uppercase`,children:`Team`}),(0,A.jsx)(`h2`,{className:`text-xl font-semibold`,children:`Fixed team`}),(0,A.jsx)(`p`,{className:`mt-2 text-sm leading-relaxed text-muted`,children:`These emails are set in the app. Opening the link asks for an email. A match can comment and add answers under that name. A member cannot change the board. This is not a public sign-up and it does not use Google.`})]}),(0,A.jsx)(`ul`,{className:`divide-y divide-border overflow-hidden rounded-xl border border-border bg-surface`,children:ae.map(e=>(0,A.jsxs)(`li`,{className:`flex items-center justify-between gap-3 px-4 py-3`,children:[(0,A.jsxs)(`div`,{children:[(0,A.jsx)(`p`,{className:`font-medium`,children:e.name}),(0,A.jsx)(`p`,{className:`text-sm text-muted`,children:e.email})]}),(0,A.jsx)(`span`,{className:`text-xs tracking-wide text-primary uppercase`,children:e.role})]},e.email))})]})}function R(e){return e!==`__proto__`&&e!==`constructor`&&e!==`prototype`}function z(e,t){let n=Object.create(null);if(e)for(let t of Object.keys(e))R(t)&&(n[t]=e[t]);if(t&&typeof t==`object`)for(let e of Object.keys(t))R(e)&&(n[e]=t[e]);return n}function B(e){if(!e)return Object.create(null);let t=Object.create(null);for(let n of Object.keys(e))R(n)&&(t[n]=e[n]);return t}var V=()=>{throw Error(`createServerOnlyFn() functions can only be called on the server!`)},H=(e,t)=>{let n=t||e||{};n.method===void 0&&(n.method=`GET`);let r=e=>H(void 0,{...n,validator:e,inputValidator:e});return Object.assign(e=>H(void 0,{...n,...e}),{options:n,middleware:e=>{let t=[...n.middleware||[]];e.forEach(e=>{i in e?e.options.middleware&&t.push(...e.options.middleware):t.push(e)});let r=H(void 0,{...n,middleware:t});return r[i]=!0,r},validator:r,inputValidator:r,handler:(...e)=>{let[t,r]=e,i={...n,extractedFn:t,serverFn:r},a=[...i.middleware||[],ue(i)];return t.method=n.method,Object.assign(async e=>{let n=await U(a,`client`,{...t,...i,data:e?.data,headers:e?.headers,signal:e?.signal,fetch:e?.fetch,context:B()}),r=s(n.error);if(r)throw r;if(n.error)throw n.error;return n.result},{...t,method:n.method,__executeServer:async e=>{let r=V(),i=r.contextAfterGlobalMiddlewares;return await U(a,`server`,{...t,data:e.data,method:e.method??n.method,serverFnMeta:t.serverFnMeta,context:z(e.context,i),request:r.request}).then(e=>({result:e.result,error:e.error,context:e.sendContext}))}})}})};async function U(e,n,r){let i=ce([...t()?.functionMiddleware||[],...e]);if(n===`server`){let e=V({throwIfNotFound:!1});e?.executedRequestMiddlewares&&(i=i.filter(t=>!e.executedRequestMiddlewares.has(t)))}let a=async e=>{let t=i.shift();if(!t)return e;try{let r=`validator`in t.options?t.options.validator:void 0;!r&&`inputValidator`in t.options&&(r=t.options.inputValidator),r&&n===`server`&&(e.data=await le(r,e.data));let i;if(n===`client`?`client`in t.options&&(i=t.options.client):`server`in t.options&&(i=t.options.server),i){let t=async(t={})=>{let n=await a({...e,...t,context:z(e.context,t.context),sendContext:z(e.sendContext,t.sendContext),headers:f(e.headers,t.headers),_callSiteFetch:e._callSiteFetch,fetch:e._callSiteFetch??t.fetch??e.fetch,result:t.result===void 0?t instanceof Response?t:e.result:t.result,error:t.error??e.error});if(n.error)throw n.error;return n},n=await i({...e,next:t});if(o(n))return{...e,error:n};if(n instanceof Response)return{...e,result:n};if(!n)throw Error(`User middleware returned undefined. You must call next() or return a result in your middlewares.`);return n}return a(e)}catch(t){return{...e,error:t}}};return a({...r,headers:r.headers||{},sendContext:r.sendContext||{},context:r.context||B(),_callSiteFetch:r.fetch})}function ce(e,t=100){let n=new Set,r=[],i=(e,a)=>{if(a>t)throw Error(`Middleware nesting depth exceeded maximum of ${t}. Check for circular references.`);e.forEach(e=>{e.options.middleware&&i(e.options.middleware,a+1),n.has(e)||(n.add(e),r.push(e))})};return i(e,0),r}async function le(e,t){if(e==null)return{};if(`~standard`in e){let n=await e[`~standard`].validate(t);if(n.issues)throw Error(JSON.stringify(n.issues,void 0,2));return n.value}if(`parse`in e)return e.parse(t);if(typeof e==`function`)return e(t);throw Error(`Invalid validator type!`)}function ue(e){return{"~types":void 0,options:{inputValidator:e.validator??e.inputValidator,client:async({next:t,sendContext:n,fetch:r,...i})=>{let a={...i,context:n,fetch:r};return t(await e.extractedFn?.(a))},server:async({next:t,...n})=>{let r=await e.serverFn?.(n);return t({...n,result:r})}}}}var W=H({method:`POST`}).handler(e(`c9457b4136f459a1fee90d8c7edafb9ecec1d1cfa590570e1111302762702dc4`)),G=H({method:`POST`}).handler(e(`b0c7cb792e7d0700cfeee0557483816d4d19d0eafc88da92c0417ab802ed3d9e`)),K=H({method:`POST`}).handler(e(`a3c39b0cc66bd4484c0e8e3bdddc022a8511eaddc2d8d20ea54df7bca3f89592`)),de=H({method:`POST`}).handler(e(`ec8a4decd42eafd626832a1d56d3d0dc0d3fae02619880ad9be72a686e09f11f`)),fe=H({method:`POST`}).handler(e(`a3c280c3aea37e586efb8514a9ddc8e440e9a61f15370078a87cced767967cdc`)),pe=H({method:`POST`}).handler(e(`89f9410beec411473a46d4ce7502c215757fa6264c1eab4be755750c860bec58`)),me=H({method:`POST`}).handler(e(`f3632ca2be61fbb489add5a5c357e07087b66e3bd388aa214c3fa2411dff356c`)),q=`w1-october-spec`,he=[{n:`1`,title:`PILOT OBJECTIVE`,body:`Build a private internal application that takes:
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

If the editor routinely discards the generated output and reconstructs the advert from scratch, the pilot has not met its primary objective.`}];function ge(){return{id:q,week:`w1`,number:1,title:`October 2026 Technical Specification, Scope of Work and Build Requirements`,description:`HYRAX AI VIDEO PRODUCTION PILOT
Document purpose: Define the minimum technical system required to deliver the October pilot.
Primary acceptance date: 31 October 2026`,notes:``,due:`2026-10-31`,milestones:he.map(e=>({id:`w1-spec-${e.n}`,title:`${e.n}. ${e.title}`,status:`not_started`,due:``,notes:e.body.trim()}))}}function J(e){return e.some(e=>e.id===q)}var _e=`hyrax-october-tracker-v3`,ve=`hyrax-october-tracker-v2`,Y=[{id:`not_started`,label:`Not started`},{id:`in_progress`,label:`In progress`},{id:`blocked`,label:`Blocked`},{id:`done`,label:`Done`}],X=[{id:`w1`,label:`Week 1`,range:`1–7 Oct`},{id:`w2`,label:`Week 2`,range:`8–14 Oct`},{id:`w3`,label:`Week 3`,range:`15–21 Oct`},{id:`w4`,label:`Week 4`,range:`22–31 Oct`}];function ye(){return{project:`Hyrax AI Video Production Pilot`,briefDate:`2026-09-28`,answers:k(),people:[],goals:[ge()]}}function be(){try{let e=localStorage.getItem(`hyrax-october-tracker-v3`)??localStorage.getItem(ve);if(e){let t=re(JSON.parse(e)),n={...t,people:t.people??[]};if(J(n.goals))return n}}catch{}return ye()}function xe(e){localStorage.setItem(_e,JSON.stringify(e))}function Se(e,t){let n=e.filter(e=>e.week===t).map(e=>e.number);return(n.length?Math.max(...n):0)+1}function Ce(e){let t=e.milestones.length,n=e.milestones.filter(e=>e.status===`done`).length;return{done:n,total:t,pct:t?Math.round(n/t*100):0}}function we(){return crypto.randomUUID()}var Te=`hyrax-team-email`;function Ee(){let[e,t]=(0,x.useState)(null),[n,r]=(0,x.useState)(`all`),[i,o]=(0,x.useState)(`all`),[s,c]=(0,x.useState)(``),[l,u]=(0,x.useState)(null),[d,f]=(0,x.useState)(`board`),[p,m]=(0,x.useState)(``),[h,g]=(0,x.useState)(null),[v,b]=(0,x.useState)(!1),[S,C]=(0,x.useState)([]),[w,T]=(0,x.useState)([]);(0,x.useEffect)(()=>{t(be());let e=sessionStorage.getItem(Te);g(e?oe(e):null),b(!0)},[]),(0,x.useEffect)(()=>{e&&xe(e)},[e]),(0,x.useEffect)(()=>{if(!p)return;let e=setTimeout(()=>m(``),1800);return()=>clearTimeout(e)},[p]),(0,x.useEffect)(()=>{if(!h)return;let e=!1;return W({data:{email:h.email}}).then(n=>{if(e)return;C(n.comments),T(n.answers);let r=J(n.goals)?n.goals:[ge()];t(e=>{if(!e)return e;let t=n.answers.find(e=>e.author===h.name);return{...e,goals:r,answers:t?t.body:e.answers}}),!J(n.goals)&&h.role===`owner`&&G({data:{email:h.email,goals:r}}).catch(()=>m(`Could not replace the old goals.`))}).catch(()=>m(`Could not open the shared tracker.`)),()=>{e=!0}},[h]);let E=(0,x.useMemo)(()=>{let t=e?.goals.flatMap(e=>e.milestones)??[];return{goals:e?.goals.length??0,milestones:t.length,done:t.filter(e=>e.status===`done`).length,blocked:t.filter(e=>e.status===`blocked`).length}},[e]);if(!v||!e)return(0,A.jsx)(`main`,{className:`mx-auto max-w-5xl px-4 py-10 text-muted`,children:`Loading tracker…`});let D=h?.role===`member`;if(!h)return(0,A.jsx)(a,{to:`/enter`});let O=h,k=s.trim().toLowerCase(),j=e.goals.filter(e=>{if(n!==`all`&&e.week!==n)return!1;let t=`${e.title} ${e.description} ${e.notes} ${e.milestones.map(e=>`${e.title} ${e.notes}`).join(` `)}`.toLowerCase();return!(k&&!t.includes(k)||i!==`all`&&!e.milestones.some(e=>e.status===i))});function M(e){t(t=>t&&e(t))}function N(e){t(t=>{if(!t)return t;let n=e(t);return O.role===`owner`&&G({data:{email:O.email,goals:n.goals}}).catch(()=>m(`Could not save the board.`)),n})}function P(e,t){pe({data:{email:O.email,id:e,body:t}}).then(t=>C(n=>n.map(n=>n.id===e?t:n))).catch(()=>m(`Could not edit that comment.`))}function F(e){me({data:{email:O.email,id:e}}).then(()=>C(t=>t.filter(t=>t.id!==e))).catch(()=>m(`Could not delete that comment.`))}function I(){let t=new Blob([JSON.stringify(e,null,2)],{type:`application/json`}),n=document.createElement(`a`);n.href=URL.createObjectURL(t),n.download=`hyrax-tracker.json`,n.click(),URL.revokeObjectURL(n.href),m(`Exported`)}function L(e){e.text().then(e=>{try{let n=re(JSON.parse(e));if(!Array.isArray(n.goals))throw Error(`Missing goals`);t(n),O.role===`owner`&&G({data:{email:O.email,goals:n.goals}}).catch(()=>m(`Could not save the board.`)),m(`Imported`)}catch{m(`Import failed`)}})}return(0,A.jsxs)(`div`,{className:`min-h-screen bg-bg text-fg`,children:[(0,A.jsxs)(`header`,{className:`sticky top-0 z-20 border-b border-border bg-bg/95 backdrop-blur`,children:[(0,A.jsxs)(`div`,{className:`mx-auto flex max-w-5xl flex-wrap items-center gap-4 px-4 py-4`,children:[(0,A.jsxs)(`div`,{className:`min-w-44`,children:[(0,A.jsx)(`p`,{className:`font-mono text-xs tracking-wide text-primary`,children:`HYRAX`}),(0,A.jsx)(`h1`,{className:`text-lg font-semibold leading-tight`,children:`October tracker`}),(0,A.jsxs)(`p`,{className:`text-sm text-muted`,children:[h.name,` · `,h.role,`.`,` `,(0,A.jsx)(`button`,{type:`button`,className:`underline`,onClick:()=>{sessionStorage.removeItem(Te),g(null)},children:`Use another email`})]})]}),(0,A.jsxs)(`div`,{className:`flex rounded-lg border border-border p-1`,children:[(0,A.jsx)(`button`,{type:`button`,className:`min-h-11 rounded-md px-3 text-sm ${d===`board`?`bg-primary font-semibold text-primary-ink`:``}`,onClick:()=>f(`board`),children:`Board`}),(0,A.jsx)(`button`,{type:`button`,className:`min-h-11 rounded-md px-3 text-sm ${d===`answers`?`bg-primary font-semibold text-primary-ink`:``}`,onClick:()=>f(`answers`),children:`Answers`}),(0,A.jsx)(`button`,{type:`button`,className:`min-h-11 rounded-md px-3 text-sm ${d===`people`?`bg-primary font-semibold text-primary-ink`:``}`,onClick:()=>f(`people`),children:`Team`})]}),(0,A.jsxs)(`dl`,{className:`flex flex-1 flex-wrap gap-2`,children:[(0,A.jsx)(Z,{label:`Goals`,value:E.goals}),(0,A.jsx)(Z,{label:`Milestones`,value:E.milestones}),(0,A.jsx)(Z,{label:`Done`,value:E.done}),(0,A.jsx)(Z,{label:`Blocked`,value:E.blocked})]}),(0,A.jsxs)(`div`,{className:`flex flex-wrap gap-2`,children:[!D&&(0,A.jsxs)(`button`,{type:`button`,className:`inline-flex min-h-11 items-center gap-2 rounded-lg bg-primary px-3 text-sm font-semibold text-primary-ink`,onClick:()=>u({kind:`goal`,isNew:!0,goal:De(e.goals,n===`all`?`w2`:n)}),children:[(0,A.jsx)(y,{size:16}),` Goal`]}),(0,A.jsx)(Oe,{label:`Export`,onClick:I,children:(0,A.jsx)(_,{size:16})}),!D&&(0,A.jsxs)(`label`,{className:`inline-flex min-h-11 cursor-pointer items-center gap-2 rounded-lg border border-border bg-surface px-3 text-sm`,children:[(0,A.jsx)(ne,{size:16}),` Import`,(0,A.jsx)(`input`,{type:`file`,accept:`application/json`,className:`sr-only`,onChange:e=>{let t=e.target.files?.[0];t&&L(t),e.target.value=``}})]}),!D&&(0,A.jsx)(Oe,{label:`Reset`,onClick:()=>{if(confirm(`Replace the shared board with the original Week 1 seed?`)){let e=ye();t(e),G({data:{email:h.email,goals:e.goals}}).catch(()=>m(`Could not save the board.`)),m(`Reset`)}},children:(0,A.jsx)(ee,{size:16})})]})]}),(0,A.jsxs)(`div`,{className:`mx-auto flex max-w-5xl flex-wrap gap-2 px-4 pb-4`,children:[(0,A.jsxs)(`select`,{className:`min-h-11 rounded-lg border border-border bg-surface px-3 text-sm`,value:n,onChange:e=>r(e.target.value),children:[(0,A.jsx)(`option`,{value:`all`,children:`All weeks`}),X.map(e=>(0,A.jsx)(`option`,{value:e.id,children:e.label},e.id))]}),(0,A.jsxs)(`select`,{className:`min-h-11 rounded-lg border border-border bg-surface px-3 text-sm`,value:i,onChange:e=>o(e.target.value),children:[(0,A.jsx)(`option`,{value:`all`,children:`Any status`}),Y.map(e=>(0,A.jsx)(`option`,{value:e.id,children:e.label},e.id))]}),(0,A.jsxs)(`label`,{className:`flex min-h-11 min-w-52 flex-1 items-center gap-2 rounded-lg border border-border bg-surface px-3 text-sm`,children:[(0,A.jsx)(te,{size:16,className:`text-muted`}),(0,A.jsx)(`input`,{value:s,onChange:e=>c(e.target.value),placeholder:`Search`,className:`w-full bg-transparent outline-none placeholder:text-muted`})]})]})]}),d===`answers`?(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(ie,{answers:e.answers,onChange:n=>{t({...e,answers:n}),de({data:{email:h.email,answers:n}}).then(()=>{T(e=>[...e.filter(e=>e.author!==h.name),{author:h.name,body:n}]),m(`Saved under ${h.name}`)}).catch(()=>m(`Could not save answers.`))}}),w.filter(e=>e.author!==h.name).length>0&&(0,A.jsxs)(`section`,{className:`mx-auto max-w-5xl space-y-3 px-4 pb-8`,children:[(0,A.jsx)(`h2`,{className:`text-sm font-semibold`,children:`Everyone else's answers`}),w.filter(e=>e.author!==h.name).map(e=>(0,A.jsxs)(`article`,{className:`rounded-xl border border-border bg-surface p-4 text-sm`,children:[(0,A.jsx)(`p`,{className:`font-medium`,children:e.author}),(0,A.jsx)(`p`,{className:`mt-2 whitespace-pre-wrap text-muted`,children:e.body.sow.building||`No scope written yet.`})]},e.author))]})]}):d===`people`?(0,A.jsx)(se,{}):(0,A.jsxs)(`main`,{className:`mx-auto max-w-5xl px-4 py-6`,children:[(0,A.jsxs)(`section`,{className:`mb-6 rounded-xl border border-border bg-surface p-4`,children:[(0,A.jsxs)(`div`,{className:`mb-2 flex items-center justify-between gap-3`,children:[(0,A.jsx)(`h2`,{className:`text-sm font-semibold`,children:`Team comments`}),(0,A.jsx)(`button`,{type:`button`,className:`min-h-11 text-sm text-primary`,onClick:()=>{W({data:{email:h.email}}).then(e=>{C(e.comments),T(e.answers),e.goals.length>0&&t(t=>t&&{...t,goals:e.goals}),m(`Team comments updated`)}).catch(()=>m(`Could not refresh comments.`))},children:`Refresh`})]}),S.length===0?(0,A.jsx)(`p`,{className:`text-sm text-muted`,children:`No comments yet. A comment here is visible to Mary, Jay, and Ben.`}):(0,A.jsx)(`ul`,{className:`space-y-2`,children:S.map(t=>{let n=e.goals.find(e=>e.id===t.goal_id);return(0,A.jsxs)(`li`,{className:`text-sm`,children:[(0,A.jsx)(`span`,{className:`font-medium`,children:t.author}),(0,A.jsxs)(`span`,{className:`text-muted`,children:[` `,`on `,n?n.title:`a goal`,`: `,t.body]}),t.author===O.name&&(0,A.jsx)($,{onEdit:e=>P(t.id,e),onDelete:()=>F(t.id),body:t.body})]},t.id)})})]}),X.filter(e=>n===`all`||n===e.id).map(t=>{let n=j.filter(e=>e.week===t.id).sort((e,t)=>e.number-t.number);return(0,A.jsxs)(`section`,{className:`mb-8`,children:[(0,A.jsxs)(`div`,{className:`mb-3 flex items-baseline justify-between gap-3`,children:[(0,A.jsxs)(`h2`,{className:`font-mono text-xs tracking-widest text-muted uppercase`,children:[t.label,` · `,t.range,` 2026`]}),!D&&(0,A.jsx)(`button`,{type:`button`,className:`text-sm text-primary`,onClick:()=>u({kind:`goal`,isNew:!0,goal:De(e.goals,t.id)}),children:`Add goal`})]}),n.length===0?(0,A.jsx)(`p`,{className:`rounded-xl border border-dashed border-border px-4 py-8 text-center text-sm text-muted`,children:`Nothing planned for this week yet.`}):n.map(e=>(0,A.jsx)(ke,{goal:e,onEdit:()=>u({kind:`goal`,isNew:!1,goal:structuredClone(e)}),onDelete:()=>{confirm(`Delete this goal and its milestones?`)&&N(t=>({...t,goals:t.goals.filter(t=>t.id!==e.id)}))},onAddMs:()=>u({kind:`ms`,gid:e.id,isNew:!0,ms:{id:we(),title:``,status:`not_started`,due:``,notes:``}}),onEditMs:t=>u({kind:`ms`,gid:e.id,isNew:!1,ms:structuredClone(t)}),onStatus:(t,n)=>{M(r=>({...r,goals:r.goals.map(r=>r.id===e.id?{...r,milestones:r.milestones.map(e=>e.id===t?{...e,status:n}:e)}:r)})),K({data:{email:h.email,goalId:e.id,milestoneId:t,status:n}}).catch(()=>m(`Could not save the status.`))},onDue:(t,n)=>{M(r=>({...r,goals:r.goals.map(r=>r.id===e.id?{...r,milestones:r.milestones.map(e=>e.id===t?{...e,due:n}:e)}:r)})),K({data:{email:h.email,goalId:e.id,milestoneId:t,due:n}}).catch(()=>m(`Could not save the due date.`))},onNotes:(t,n)=>N(r=>({...r,goals:r.goals.map(r=>r.id===e.id?{...r,milestones:r.milestones.map(e=>e.id===t?{...e,notes:n}:e)}:r)})),onDeleteMs:t=>N(n=>({...n,goals:n.goals.map(n=>n.id===e.id?{...n,milestones:n.milestones.filter(e=>e.id!==t)}:n)})),locked:D,comments:S.filter(t=>t.goal_id===e.id),me:O.name,onComment:t=>{fe({data:{email:h.email,goalId:e.id,body:t}}).then(e=>C(t=>[...t,e])).catch(()=>m(`Could not add the comment.`))},onEditComment:P,onDeleteComment:F},e.id))]},t.id)})]}),l&&(0,A.jsx)(Me,{draft:l,onClose:()=>u(null),onSave:e=>{e.kind===`goal`?N(t=>({...t,goals:e.isNew?[...t.goals,e.goal]:t.goals.map(t=>t.id===e.goal.id?e.goal:t)})):N(t=>({...t,goals:t.goals.map(t=>t.id===e.gid?{...t,milestones:e.isNew?[...t.milestones,e.ms]:t.milestones.map(t=>t.id===e.ms.id?e.ms:t)}:t)})),u(null)}}),p&&(0,A.jsx)(`p`,{className:`fixed right-4 bottom-4 rounded-lg border border-border bg-surface px-4 py-2 text-sm`,children:p})]})}function De(e,t){return{id:we(),week:t,number:Se(e,t),title:``,description:``,notes:``,due:``,milestones:[]}}function Z({label:e,value:t}){return(0,A.jsxs)(`div`,{className:`min-w-20 rounded-lg border border-border bg-surface px-3 py-2`,children:[(0,A.jsx)(`dt`,{className:`text-xs text-muted`,children:e}),(0,A.jsx)(`dd`,{className:`text-lg font-semibold leading-none`,children:t})]})}function Oe({label:e,onClick:t,children:n}){return(0,A.jsxs)(`button`,{type:`button`,"aria-label":e,className:`inline-flex min-h-11 items-center gap-2 rounded-lg border border-border bg-surface px-3 text-sm`,onClick:t,children:[n,(0,A.jsx)(`span`,{children:e})]})}function ke({goal:e,onEdit:t,onDelete:n,onAddMs:r,onEditMs:i,onStatus:a,onDue:o,onNotes:s,onDeleteMs:c,locked:l,comments:u,me:d,onComment:f,onEditComment:m,onDeleteComment:h}){let g=Ce(e),[_,v]=(0,x.useState)({}),y=e.milestones.length>0&&e.milestones.every(e=>_[e.id]);return(0,A.jsxs)(`article`,{className:`mb-3 overflow-hidden rounded-xl border border-border bg-surface`,children:[(0,A.jsxs)(`div`,{className:`flex gap-3 p-4`,children:[(0,A.jsxs)(`span`,{className:`mt-0.5 h-fit rounded-md bg-primary/15 px-2 py-1 font-mono text-xs text-primary`,children:[`G`,e.number]}),(0,A.jsxs)(`div`,{className:`min-w-0 flex-1`,children:[(0,A.jsx)(`h3`,{className:`text-base font-semibold`,children:e.title}),e.description&&(0,A.jsx)(`p`,{className:`mt-1 text-sm leading-relaxed whitespace-pre-wrap text-muted`,children:e.description}),e.notes&&(0,A.jsx)(`p`,{className:`mt-2 text-sm whitespace-pre-wrap`,children:e.notes})]}),(0,A.jsxs)(`div`,{className:`hidden w-28 shrink-0 text-right sm:block`,children:[(0,A.jsx)(`div`,{className:`h-1.5 overflow-hidden rounded-full bg-surface-2`,children:(0,A.jsx)(`div`,{className:`h-full bg-primary`,style:{width:`${g.pct}%`}})}),(0,A.jsxs)(`p`,{className:`mt-1 text-xs text-muted`,children:[g.done,`/`,g.total,e.due?` · ${e.due}`:``]})]})]}),(0,A.jsx)(`div`,{className:`flex justify-end border-t border-border px-4 py-2`,children:(0,A.jsx)(`button`,{type:`button`,className:`min-h-11 text-sm text-primary`,onClick:()=>v(y?{}:Object.fromEntries(e.milestones.map(e=>[e.id,!0]))),children:y?`Minimise all`:`Maximise all`})}),(0,A.jsx)(`ul`,{children:e.milestones.map(e=>{let t=!!_[e.id];return(0,A.jsxs)(`li`,{className:`border-t border-border`,children:[(0,A.jsxs)(`div`,{className:`grid gap-2 px-4 py-3 sm:grid-cols-[auto_1fr_9.5rem_9rem_auto] sm:items-start`,children:[(0,A.jsx)(je,{status:e.status}),(0,A.jsx)(`div`,{className:`min-w-0`,children:(0,A.jsxs)(`button`,{type:`button`,className:`text-left text-sm font-medium`,"aria-expanded":t,onClick:()=>v(t=>({...t,[e.id]:!t[e.id]})),children:[t?`▾`:`▸`,` `,e.title]})}),(0,A.jsx)(`select`,{"aria-label":`Status`,className:`min-h-11 rounded-lg border border-border bg-bg px-2 text-sm`,value:e.status,onChange:t=>a(e.id,t.target.value),children:Y.map(e=>(0,A.jsx)(`option`,{value:e.id,children:e.label},e.id))}),(0,A.jsxs)(`label`,{className:`flex min-h-11 items-center gap-2 rounded-lg border border-border bg-bg px-2 text-sm`,children:[(0,A.jsx)(p,{size:14,className:`shrink-0 text-muted`}),(0,A.jsx)(`input`,{type:`date`,"aria-label":`Due date`,className:`w-full bg-transparent outline-none`,value:e.due,onChange:t=>o(e.id,t.target.value)})]}),!l&&(0,A.jsxs)(`div`,{className:`flex gap-1`,children:[(0,A.jsx)(`button`,{type:`button`,className:`min-h-11 px-2 text-sm text-muted`,onClick:()=>i(e),children:`Edit`}),(0,A.jsx)(`button`,{type:`button`,"aria-label":`Delete milestone`,className:`min-h-11 px-2 text-alert`,onClick:()=>c(e.id),children:(0,A.jsx)(b,{size:16})})]})]}),t&&(0,A.jsx)(Ae,{notes:e.notes,locked:l,label:e.title,onSave:t=>s(e.id,t)})]},e.id)})}),!l&&(0,A.jsxs)(`div`,{className:`flex justify-between border-t border-border px-4 py-2`,children:[(0,A.jsx)(`button`,{type:`button`,className:`min-h-11 text-sm text-primary`,onClick:r,children:`Add milestone`}),(0,A.jsxs)(`div`,{className:`flex gap-3`,children:[(0,A.jsx)(`button`,{type:`button`,className:`min-h-11 text-sm`,onClick:t,children:`Edit goal`}),(0,A.jsx)(`button`,{type:`button`,className:`min-h-11 text-sm text-alert`,onClick:n,children:`Delete`})]})]}),(0,A.jsx)(Pe,{comments:u,me:d,onComment:f,onEditComment:m,onDeleteComment:h})]})}function Ae({notes:e,locked:t,label:n,onSave:r}){let[i,a]=(0,x.useState)(e);return(0,x.useEffect)(()=>a(e),[e]),(0,A.jsx)(`div`,{className:`border-t border-border bg-bg/40 px-4 py-3`,children:t?(0,A.jsx)(`p`,{className:`text-sm leading-relaxed whitespace-pre-wrap`,children:e}):(0,A.jsx)(`textarea`,{className:`field min-h-40 font-sans text-sm leading-relaxed`,"aria-label":`Edit ${n}`,value:i,onChange:e=>a(e.target.value),onBlur:()=>{i!==e&&r(i)}})})}function je({status:e}){let t=`mt-1 text-muted`;return e===`done`?(0,A.jsx)(m,{size:16,className:`mt-1 text-primary`}):e===`blocked`?(0,A.jsx)(v,{size:16,className:`mt-1 text-alert`}):e===`in_progress`?(0,A.jsx)(h,{size:16,className:t}):(0,A.jsx)(g,{size:16,className:t})}function Me({draft:e,onClose:t,onSave:n}){let[r,i]=(0,x.useState)(e),a=r.kind===`goal`?r.goal:null,o=r.kind===`ms`?r.ms:null;return(0,A.jsx)(`div`,{className:`fixed inset-0 z-40 flex items-start justify-center bg-bg/70 px-4 pt-16`,children:(0,A.jsxs)(`form`,{className:`max-h-[85vh] w-full max-w-3xl overflow-y-auto rounded-xl border border-border bg-surface p-4`,onSubmit:e=>{e.preventDefault(),(r.kind!==`goal`||r.goal.title.trim())&&(r.kind!==`ms`||r.ms.title.trim())&&n(r)},children:[(0,A.jsx)(`h2`,{className:`mb-3 text-base font-semibold`,children:r.kind===`goal`?r.isNew?`New goal`:`Edit goal`:r.isNew?`New milestone`:`Edit milestone`}),a&&(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(Q,{label:`Week`,children:(0,A.jsx)(`select`,{className:`field`,value:a.week,onChange:e=>i({...r,kind:`goal`,goal:{...a,week:e.target.value}}),children:X.map(e=>(0,A.jsxs)(`option`,{value:e.id,children:[e.label,` · `,e.range]},e.id))})}),(0,A.jsx)(Q,{label:`Number`,children:(0,A.jsx)(`input`,{className:`field`,type:`number`,min:1,value:a.number,onChange:e=>i({...r,kind:`goal`,goal:{...a,number:Number(e.target.value)||1}})})}),(0,A.jsx)(Q,{label:`Title`,children:(0,A.jsx)(`input`,{className:`field`,value:a.title,required:!0,onChange:e=>i({...r,kind:`goal`,goal:{...a,title:e.target.value}})})}),(0,A.jsx)(Q,{label:`Description`,children:(0,A.jsx)(`textarea`,{className:`field min-h-24`,value:a.description,onChange:e=>i({...r,kind:`goal`,goal:{...a,description:e.target.value}})})}),(0,A.jsx)(Q,{label:`Due`,children:(0,A.jsx)(`input`,{className:`field`,type:`date`,value:a.due,onChange:e=>i({...r,kind:`goal`,goal:{...a,due:e.target.value}})})}),(0,A.jsx)(Q,{label:`Notes`,children:(0,A.jsx)(`textarea`,{className:`field min-h-20`,value:a.notes,onChange:e=>i({...r,kind:`goal`,goal:{...a,notes:e.target.value}})})})]}),o&&(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(Q,{label:`Title`,children:(0,A.jsx)(`input`,{className:`field`,required:!0,value:o.title,onChange:e=>{let t=e.target.value;i(e=>e.kind===`ms`?{...e,ms:{...e.ms,title:t}}:e)}})}),(0,A.jsx)(Q,{label:`Status`,children:(0,A.jsx)(`select`,{className:`field`,value:o.status,onChange:e=>{let t=e.target.value;i(e=>e.kind===`ms`?{...e,ms:{...e.ms,status:t}}:e)},children:Y.map(e=>(0,A.jsx)(`option`,{value:e.id,children:e.label},e.id))})}),(0,A.jsx)(Q,{label:`Due`,children:(0,A.jsx)(`input`,{className:`field`,type:`date`,value:o.due,onChange:e=>{let t=e.target.value;i(e=>e.kind===`ms`?{...e,ms:{...e.ms,due:t}}:e)}})}),(0,A.jsx)(Q,{label:`Notes`,children:(0,A.jsx)(`textarea`,{className:`field min-h-64`,value:o.notes,onChange:e=>{let t=e.target.value;i(e=>e.kind===`ms`?{...e,ms:{...e.ms,notes:t}}:e)}})})]}),(0,A.jsxs)(`div`,{className:`mt-4 flex justify-end gap-2`,children:[(0,A.jsx)(`button`,{type:`button`,className:`min-h-11 rounded-lg border border-border px-4 text-sm`,onClick:t,children:`Cancel`}),(0,A.jsx)(`button`,{type:`submit`,className:`min-h-11 rounded-lg bg-primary px-4 text-sm font-semibold text-primary-ink`,children:`Save`})]})]})})}function Q({label:e,children:t}){return(0,A.jsxs)(`label`,{className:`mb-3 block text-sm text-muted`,children:[e,(0,A.jsx)(`div`,{className:`mt-1 text-fg`,children:t})]})}function Ne({onMatch:e}){let[t,n]=(0,x.useState)(``),[r,i]=(0,x.useState)(``);return(0,A.jsx)(`main`,{className:`grid min-h-screen place-items-center bg-bg px-4 text-fg`,children:(0,A.jsxs)(`form`,{className:`w-full max-w-md space-y-3 rounded-xl border border-border bg-surface p-5`,onSubmit:n=>{n.preventDefault();let r=oe(t);if(!r){i(`That email is not on the team.`);return}e(r)},children:[(0,A.jsx)(`p`,{className:`font-mono text-xs tracking-widest text-primary uppercase`,children:`Hyrax`}),(0,A.jsx)(`h1`,{className:`text-xl font-semibold`,children:`Team link`}),(0,A.jsx)(`p`,{className:`text-sm leading-relaxed text-muted`,children:`Enter the email already on the team list. No Google account. If it matches, you can comment and add answers under your name.`}),(0,A.jsx)(`input`,{className:`field`,type:`text`,inputMode:`email`,required:!0,autoComplete:`email`,placeholder:`Email`,value:t,onChange:e=>n(e.target.value)}),r&&(0,A.jsx)(`p`,{className:`text-sm text-alert`,children:r}),(0,A.jsx)(`button`,{type:`submit`,className:`min-h-11 w-full rounded-lg bg-primary text-sm font-semibold text-primary-ink`,children:`Continue`})]})})}function $({body:e,onEdit:t,onDelete:n}){let[r,i]=(0,x.useState)(!1),[a,o]=(0,x.useState)(e);return r?(0,A.jsxs)(`form`,{className:`mt-2 flex gap-2`,onSubmit:e=>{e.preventDefault(),a.trim()&&(t(a.trim()),i(!1))},children:[(0,A.jsx)(`input`,{className:`field`,value:a,onChange:e=>o(e.target.value)}),(0,A.jsx)(`button`,{type:`submit`,className:`min-h-11 rounded-lg border border-border px-3 text-sm`,children:`Save`}),(0,A.jsx)(`button`,{type:`button`,className:`min-h-11 px-2 text-sm text-muted`,onClick:()=>i(!1),children:`Cancel`})]}):(0,A.jsxs)(`span`,{className:`ml-2 inline-flex gap-2`,children:[(0,A.jsx)(`button`,{type:`button`,className:`text-sm text-primary`,onClick:()=>{o(e),i(!0)},children:`Edit`}),(0,A.jsx)(`button`,{type:`button`,className:`text-sm text-alert`,onClick:()=>{confirm(`Delete your comment?`)&&n()},children:`Delete`})]})}function Pe({comments:e,me:t,onComment:n,onEditComment:r,onDeleteComment:i}){let[a,o]=(0,x.useState)(``);return(0,A.jsxs)(`div`,{className:`space-y-2 border-t border-border px-4 py-3`,children:[e.map(e=>(0,A.jsxs)(`div`,{className:`text-sm`,children:[(0,A.jsxs)(`span`,{className:`font-medium`,children:[e.author,`.`]}),` `,(0,A.jsx)(`span`,{className:`text-muted`,children:e.body}),e.author===t&&(0,A.jsx)($,{body:e.body,onEdit:t=>r(e.id,t),onDelete:()=>i(e.id)})]},e.id)),(0,A.jsxs)(`form`,{className:`flex gap-2`,onSubmit:e=>{e.preventDefault(),a.trim()&&(n(a.trim()),o(``))},children:[(0,A.jsx)(`input`,{className:`field`,value:a,placeholder:`Comment under your name`,onChange:e=>o(e.target.value)}),(0,A.jsx)(`button`,{type:`submit`,className:`min-h-11 rounded-lg border border-border px-3 text-sm`,children:`Comment`})]})]})}export{Ee as n,Ne as t};