import { o as __toESM } from "../_runtime.mjs";
import { S as require_jsx_runtime, Y as require_react, y as Navigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as TSS_SERVER_FUNCTION, r as getServerFnById, t as createServerFn } from "./ssr.mjs";
import { n as matchTeam, t as TEAM } from "./team-C3E8MDHu.mjs";
import { a as RotateCcw, c as Download, d as CircleCheck, f as Calendar, i as Search, l as Circle, o as Plus, r as Trash2, s as OctagonAlert, t as Upload, u as CircleDashed } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/tracker-app-BSChltas.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var FLOW_KINDS = [
	{
		id: "human",
		label: "Human approval"
	},
	{
		id: "ai",
		label: "AI-driven"
	},
	{
		id: "deterministic",
		label: "Deterministic"
	},
	{
		id: "async",
		label: "Background"
	},
	{
		id: "external",
		label: "External provider"
	}
];
var GEN_ROWS = [
	{
		key: "repeatability",
		label: "Repeatable recipes"
	},
	{
		key: "api",
		label: "Headless / API call from Hyrax"
	},
	{
		key: "queue",
		label: "Queue large job volumes"
	},
	{
		key: "versioning",
		label: "Version the workflows"
	},
	{
		key: "scale",
		label: "Scale workers independently"
	},
	{
		key: "swap",
		label: "Swap a model without redesigning Hyrax"
	}
];
function nid$1() {
	return crypto.randomUUID();
}
function item(text = "") {
	return {
		id: nid$1(),
		text
	};
}
function deliverable(name, evidence, owner) {
	return {
		id: nid$1(),
		name,
		evidence,
		owner
	};
}
function seedDeliverables() {
	return [
		deliverable("Working pilot path", "A complete job runs in the deployed environment and produces the agreed editor handoff", "Mary with engineering support"),
		deliverable("Recipe and provider decision", "Versioned inputs, results, failures, cost and editor assessment from the bounded comparison", "Mary and senior engineer"),
		deliverable("Retained asset library", "Approved segments can be found and used; unapproved or restricted ranges cannot be rendered", "Mary; editor owns usability approval"),
		deliverable("Review and approval path", "A correction creates a new version; acceptance and release decisions remain distinct", "Editors and release owner"),
		deliverable("Specification and operating guide", "Data contracts, deployment, recovery, access and known limitations documented", "Mary and senior engineer"),
		deliverable("Measurement report", "Matched baseline and pilot timings, accepted outcomes, cost and failure analysis", "Mary and lead editor")
	];
}
var emptyGen = () => ({
	floyo: "",
	comfy: "",
	hosted: ""
});
function emptyAnswers() {
	return {
		sow: {
			building: "",
			inScope: [item()],
			outOfScope: [item()],
			deliverables: seedDeliverables(),
			path: [
				item("UGC / presenter"),
				item("B-roll"),
				item("Captions"),
				item("Voice / audio"),
				item("Music / sound"),
				item("CTA / end frame"),
				item("Assembled first cut")
			],
			acceptance: "",
			flags: [{
				id: nid$1(),
				concern: "",
				alternative: ""
			}]
		},
		flow: [
			"Campaign / product rules",
			"Job creation and budget",
			"Asset retrieval or generation",
			"Private storage and rights",
			"Analysis and search",
			"Creative Manifest",
			"Deterministic render",
			"QA checks",
			"Editor review",
			"Named approval"
		].map((title) => ({
			id: nid$1(),
			title,
			kind: "deterministic",
			detail: ""
		})),
		requirements: [{
			id: nid$1(),
			item: "",
			from: "Hyrax",
			stage: "Before build",
			blocker: false,
			notes: ""
		}],
		generation: {
			recommendation: "",
			repeatability: emptyGen(),
			api: emptyGen(),
			queue: emptyGen(),
			versioning: emptyGen(),
			scale: emptyGen(),
			swap: emptyGen()
		}
	};
}
function withAnswers(state) {
	const answers = state.answers ?? emptyAnswers();
	const rows = answers.sow.deliverables;
	const deliverables = rows.every((row) => typeof row.name === "string") ? rows : rows.some((row) => row.text) ? rows.map((row) => ({
		id: row.id,
		name: row.text ?? "",
		evidence: row.evidence ?? "",
		owner: row.owner ?? ""
	})) : seedDeliverables();
	return {
		...state,
		answers: {
			...answers,
			sow: {
				...answers.sow,
				deliverables
			}
		}
	};
}
function nid() {
	return crypto.randomUUID();
}
function AnswersView({ answers, onChange }) {
	const sow = answers.sow;
	function setSow(patch) {
		onChange({
			...answers,
			sow: {
				...sow,
				...patch
			}
		});
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto max-w-5xl space-y-8 px-4 py-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-muted",
				children: "Write the October answers here in the shape they need to be delivered. The technical specification and the development pipeline are not in this tracker."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
				kicker: "Goal 1",
				title: "Scope of work",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
						text: "What we are building",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
							className: "field min-h-28",
							value: sow.building,
							onChange: (e) => setSow({ building: e.target.value }),
							placeholder: "One short statement of the October product."
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ListEditor, {
						label: "In scope",
						items: sow.inScope,
						onChange: (inScope) => setSow({ inScope }),
						placeholder: "One in-scope item"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ListEditor, {
						label: "Out of scope",
						items: sow.outOfScope,
						onChange: (outOfScope) => setSow({ outOfScope }),
						placeholder: "One out-of-scope item"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DeliverableTable, {
						rows: sow.deliverables,
						onChange: (deliverables) => setSow({ deliverables })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ListEditor, {
						label: "Basic path that must exist in the first cut",
						items: sow.path,
						onChange: (path) => setSow({ path }),
						placeholder: "Path item"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
						text: "Editor acceptance bar",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
							className: "field min-h-24",
							value: sow.acceptance,
							onChange: (e) => setSow({ acceptance: e.target.value }),
							placeholder: "What has to be true for an editor to prefer this first cut over a blank timeline."
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mb-2 text-sm text-muted",
							children: "Flags and simpler alternatives"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "space-y-2",
							children: sow.flags.map((flag) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "grid gap-2 rounded-xl border border-border bg-surface p-3 sm:grid-cols-[1fr_1fr_auto]",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										className: "field",
										value: flag.concern,
										placeholder: "What looks unrealistic or unnecessary",
										onChange: (e) => setSow({ flags: sow.flags.map((f) => f.id === flag.id ? {
											...f,
											concern: e.target.value
										} : f) })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										className: "field",
										value: flag.alternative,
										placeholder: "Simpler alternative",
										onChange: (e) => setSow({ flags: sow.flags.map((f) => f.id === flag.id ? {
											...f,
											alternative: e.target.value
										} : f) })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										"aria-label": "Remove flag",
										className: "min-h-11 text-alert",
										onClick: () => setSow({ flags: sow.flags.filter((f) => f.id !== flag.id) }),
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { size: 16 })
									})
								]
							}, flag.id))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							className: "mt-2 inline-flex min-h-11 items-center gap-1 text-sm text-primary",
							onClick: () => setSow({ flags: [...sow.flags, {
								id: nid(),
								concern: "",
								alternative: ""
							}] }),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { size: 14 }), " Flag"]
						})
					] })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
				kicker: "Goal 2",
				title: "Process flowchart",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted",
						children: "Each box is a hand-off. Mark whether it is a person, an AI proposal, deterministic software, background work, or an outside provider."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
						className: "relative space-y-0 border-l border-border pl-4",
						children: answers.flow.map((step, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "relative pb-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute top-4 -left-[1.3rem] size-2.5 rounded-full bg-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-xl border border-border bg-surface p-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mb-2 flex flex-wrap items-center gap-2",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-mono text-xs text-muted",
											children: String(index).padStart(2, "0")
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											className: "field min-w-40 flex-1",
											value: step.title,
											onChange: (e) => updateStep(answers, onChange, step.id, { title: e.target.value })
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
											className: "field w-auto",
											value: step.kind,
											"aria-label": "Step type",
											onChange: (e) => updateStep(answers, onChange, step.id, { kind: e.target.value }),
											children: FLOW_KINDS.map((k) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
												value: k.id,
												children: k.label
											}, k.id))
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											type: "button",
											"aria-label": "Remove step",
											className: "min-h-11 px-2 text-alert",
											onClick: () => onChange({
												...answers,
												flow: answers.flow.filter((s) => s.id !== step.id)
											}),
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { size: 16 })
										})
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
									className: "field min-h-16",
									value: step.detail,
									placeholder: "What happens, what is handed on, and where it can stop.",
									onChange: (e) => updateStep(answers, onChange, step.id, { detail: e.target.value })
								})]
							})]
						}, step.id))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						className: "inline-flex min-h-11 items-center gap-1 text-sm text-primary",
						onClick: () => onChange({
							...answers,
							flow: [...answers.flow, {
								id: nid(),
								title: "",
								kind: "deterministic",
								detail: ""
							}]
						}),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { size: 14 }), " Step"]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
				kicker: "Goal 4",
				title: "Requirements and dependencies",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted",
						children: "One row per thing you need. Say who provides it, which stage needs it, and whether work actually stops without it."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "space-y-3",
						children: answers.requirements.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
							className: "rounded-xl border border-border bg-surface p-3",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid gap-2 sm:grid-cols-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										className: "field sm:col-span-2",
										value: row.item,
										placeholder: "Account, asset, decision, or access",
										onChange: (e) => updateReq(answers, onChange, row.id, { item: e.target.value })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
										className: "field",
										value: row.from,
										"aria-label": "Provided by",
										onChange: (e) => updateReq(answers, onChange, row.id, { from: e.target.value }),
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
												value: "Hyrax",
												children: "From Hyrax"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
												value: "Mary",
												children: "From Mary"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
												value: "Both",
												children: "Both"
											})
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										className: "field",
										value: row.stage,
										placeholder: "Stage that needs it",
										onChange: (e) => updateReq(answers, onChange, row.id, { stage: e.target.value })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
										className: "flex min-h-11 items-center gap-2 text-sm",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											type: "checkbox",
											checked: row.blocker,
											onChange: (e) => updateReq(answers, onChange, row.id, { blocker: e.target.checked })
										}), "Hard blocker"]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										className: "min-h-11 text-left text-sm text-alert",
										onClick: () => onChange({
											...answers,
											requirements: answers.requirements.filter((r) => r.id !== row.id)
										}),
										children: "Remove"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
										className: "field min-h-16 sm:col-span-2",
										value: row.notes,
										placeholder: "Notes",
										onChange: (e) => updateReq(answers, onChange, row.id, { notes: e.target.value })
									})
								]
							})
						}, row.id))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						className: "inline-flex min-h-11 items-center gap-1 text-sm text-primary",
						onClick: () => onChange({
							...answers,
							requirements: [...answers.requirements, {
								id: nid(),
								item: "",
								from: "Hyrax",
								stage: "",
								blocker: false,
								notes: ""
							}]
						}),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { size: 14 }), " Requirement"]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
				kicker: "Goal 5",
				title: "Generation layer",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted",
						children: "Floyo, self-hosted ComfyUI, or a hosted API as the recipe layer under Hyrax. The gated build pipeline is not tracked here."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "overflow-x-auto rounded-xl border border-border",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
							className: "w-full min-w-[40rem] border-collapse text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
								className: "border-b border-border bg-surface text-left text-muted",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "p-3 font-medium",
										children: "Question"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "p-3 font-medium",
										children: "Floyo"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "p-3 font-medium",
										children: "Self-hosted ComfyUI"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "p-3 font-medium",
										children: "Hosted API"
									})
								]
							}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: GEN_ROWS.map((row) => {
								const notes = answers.generation[row.key];
								if (typeof notes === "string") return null;
								return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
									className: "border-b border-border align-top",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "p-3 text-left font-medium",
										children: row.label
									}), [
										"floyo",
										"comfy",
										"hosted"
									].map((col) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "p-2",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
											className: "field min-h-20",
											value: notes[col],
											onChange: (e) => onChange({
												...answers,
												generation: {
													...answers.generation,
													[row.key]: {
														...notes,
														[col]: e.target.value
													}
												}
											})
										})
									}, col))]
								}, row.key);
							}) })]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
						text: "Recommendation",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
							className: "field min-h-28",
							value: answers.generation.recommendation,
							placeholder: "The simplest option that is repeatable now and can scale or swap later.",
							onChange: (e) => onChange({
								...answers,
								generation: {
									...answers.generation,
									recommendation: e.target.value
								}
							})
						})
					})
				]
			})
		]
	});
}
function updateStep(answers, onChange, id, patch) {
	onChange({
		...answers,
		flow: answers.flow.map((s) => s.id === id ? {
			...s,
			...patch
		} : s)
	});
}
function updateReq(answers, onChange, id, patch) {
	onChange({
		...answers,
		requirements: answers.requirements.map((r) => r.id === id ? {
			...r,
			...patch
		} : r)
	});
}
function Section({ kicker, title, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "space-y-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "font-mono text-xs tracking-widest text-primary uppercase",
			children: kicker
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "text-xl font-semibold",
			children: title
		})] }), children]
	});
}
function Label({ text, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "block text-sm text-muted",
		children: [text, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-1 text-fg",
			children
		})]
	});
}
function DeliverableTable({ rows, onChange }) {
	function patch(id, next) {
		onChange(rows.map((row) => row.id === id ? {
			...row,
			...next
		} : row));
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mb-2 text-sm font-semibold text-fg",
			children: "Deliverables and owners"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "overflow-x-auto rounded-xl border border-border",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
				className: "w-full min-w-[40rem] border-collapse text-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
					className: "bg-surface-2 text-left",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
							className: "w-[22%] p-3 font-semibold",
							children: "Deliverable"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
							className: "p-3 font-semibold",
							children: "Acceptance evidence"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
							className: "w-[24%] p-3 font-semibold",
							children: "Accountable owner"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { className: "w-12 p-3" })
					]
				}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: rows.map((row, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
					className: index % 2 === 0 ? "border-t border-border bg-surface" : "border-t border-border bg-bg",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
							className: "p-2 align-top",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
								className: "field min-h-20",
								value: row.name,
								"aria-label": "Deliverable",
								onChange: (e) => patch(row.id, { name: e.target.value })
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
							className: "p-2 align-top",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
								className: "field min-h-20",
								value: row.evidence,
								"aria-label": "Acceptance evidence",
								onChange: (e) => patch(row.id, { evidence: e.target.value })
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
							className: "p-2 align-top",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
								className: "field min-h-20",
								value: row.owner,
								"aria-label": "Accountable owner",
								onChange: (e) => patch(row.id, { owner: e.target.value })
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
							className: "p-2 align-top",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								"aria-label": "Remove deliverable",
								className: "min-h-11 px-2 text-alert",
								onClick: () => onChange(rows.filter((item) => item.id !== row.id)),
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { size: 16 })
							})
						})
					]
				}, row.id)) })]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
			type: "button",
			className: "mt-2 inline-flex min-h-11 items-center gap-1 text-sm text-primary",
			onClick: () => onChange([...rows, {
				id: nid(),
				name: "",
				evidence: "",
				owner: ""
			}]),
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { size: 14 }), " Deliverable"]
		})
	] });
}
function ListEditor({ label, items, onChange, placeholder }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mb-2 text-sm text-muted",
			children: label
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "space-y-2",
			children: items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: "flex gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					className: "field",
					value: item.text,
					placeholder,
					onChange: (e) => onChange(items.map((x) => x.id === item.id ? {
						...x,
						text: e.target.value
					} : x))
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					"aria-label": `Remove ${label}`,
					className: "min-h-11 px-2 text-alert",
					onClick: () => onChange(items.filter((x) => x.id !== item.id)),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { size: 16 })
				})]
			}, item.id))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
			type: "button",
			className: "mt-2 inline-flex min-h-11 items-center gap-1 text-sm text-primary",
			onClick: () => onChange([...items, {
				id: nid(),
				text: ""
			}]),
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { size: 14 }), " Add"]
		})
	] });
}
function PeopleView() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto max-w-3xl space-y-4 px-4 py-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-mono text-xs tracking-widest text-primary uppercase",
				children: "Team"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-xl font-semibold",
				children: "Fixed team"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm leading-relaxed text-muted",
				children: "These emails are set in the app. Opening the link asks for an email. A match can comment and add answers under that name. A member cannot change the board. This is not a public sign-up and it does not use Google."
			})
		] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "divide-y divide-border overflow-hidden rounded-xl border border-border bg-surface",
			children: TEAM.map((member) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: "flex items-center justify-between gap-3 px-4 py-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-medium",
					children: member.name
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted",
					children: member.email
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-xs tracking-wide text-primary uppercase",
					children: member.role
				})]
			}, member.email))
		})]
	});
}
var createSsrRpc = (functionId) => {
	const url = "/_serverFn/" + functionId;
	const serverFnMeta = { id: functionId };
	const fn = async (...args) => {
		return (await getServerFnById(functionId, { origin: "server" }))(...args);
	};
	return Object.assign(fn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
var loadShared = createServerFn({ method: "POST" }).validator((input) => input).handler(createSsrRpc("c9457b4136f459a1fee90d8c7edafb9ecec1d1cfa590570e1111302762702dc4"));
var saveGoals = createServerFn({ method: "POST" }).validator((input) => input).handler(createSsrRpc("b0c7cb792e7d0700cfeee0557483816d4d19d0eafc88da92c0417ab802ed3d9e"));
var updateMilestone = createServerFn({ method: "POST" }).validator((input) => input).handler(createSsrRpc("a3c39b0cc66bd4484c0e8e3bdddc022a8511eaddc2d8d20ea54df7bca3f89592"));
var saveMyAnswers = createServerFn({ method: "POST" }).validator((input) => input).handler(createSsrRpc("ec8a4decd42eafd626832a1d56d3d0dc0d3fae02619880ad9be72a686e09f11f"));
var addComment = createServerFn({ method: "POST" }).validator((input) => input).handler(createSsrRpc("a3c280c3aea37e586efb8514a9ddc8e440e9a61f15370078a87cced767967cdc"));
var updateMyComment = createServerFn({ method: "POST" }).validator((input) => input).handler(createSsrRpc("89f9410beec411473a46d4ce7502c215757fa6264c1eab4be755750c860bec58"));
var deleteMyComment = createServerFn({ method: "POST" }).validator((input) => input).handler(createSsrRpc("f3632ca2be61fbb489add5a5c357e07087b66e3bd388aa214c3fa2411dff356c"));
var SPEC_GOAL_ID = "w1-october-spec";
var sections = [
	{
		n: "1",
		title: "PILOT OBJECTIVE",
		body: `Build a private internal application that takes:
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

The editor should be correcting and improving an existing advert, not rebuilding the advert from an empty timeline.`
	},
	{
		n: "2",
		title: "OCTOBER DEFINITION OF DONE",
		body: `The October pilot is complete when the following workflow runs end-to-end:

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

The system separates AI-assisted editorial decision-making from deterministic software execution.`
	},
	{
		n: "3",
		title: "OCTOBER SCOPE OF WORK",
		body: `3.1 IN SCOPE

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
created_at`
	},
	{
		n: "4",
		title: "MEDIA INGEST AND NORMALISATION",
		body: `Every uploaded or generated media file must pass through media preprocessing.

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
Frame Rate: 30fps`
	},
	{
		n: "5",
		title: "TRANSCRIPTION AND SCRIPT ALIGNMENT",
		body: `Presenter footage must be transcribed.

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

Custom speech recognition development is not required for October.`
	},
	{
		n: "6",
		title: "ASSET SEGMENT IDENTIFICATION",
		body: `Do not treat an entire video as one usable asset.

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

Full autonomous shot-quality detection is not required for the first pilot.`
	},
	{
		n: "7",
		title: "ASSET SEARCH",
		body: `October search should begin simple.

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
TwelveLabs may improve semantic video search later, but it should not be a dependency for producing the first advert.`
	},
	{
		n: "8",
		title: "EDIT DIRECTOR / CREATIVE MANIFEST",
		body: `The Creative Manifest is the central technical contract between AI decision-making and deterministic rendering.
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
AI output that fails validation does not reach the renderer.`
	},
	{
		n: "9",
		title: "AI COMPONENT",
		body: `Use one primary LLM for the October pilot.
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
• initiate unrestricted render operations`
	},
	{
		n: "10",
		title: "VIDEO RENDERER",
		body: `Use: Remotion + FFmpeg

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
Premiere may remain a downstream editing tool where final manual creative work is required.`
	},
	{
		n: "11",
		title: "CAPTION SYSTEM",
		body: `Required:
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

Pixel-level styling should be handled by deterministic templates rather than generated independently by an LLM.`
	},
	{
		n: "12",
		title: "AUDIO SYSTEM",
		body: `October requires a maximum of four audio layers:
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
SFX limited to approved manifest moments`
	},
	{
		n: "13",
		title: "CTA AND END FRAME",
		body: `Build CTA/end-frame output as deterministic Remotion components.

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

Critical offer wording must come from approved campaign configuration, not be generated freely during rendering.`
	},
	{
		n: "14",
		title: "AUTOMATED QA",
		body: `October QA should primarily use deterministic checks.

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

These are not required as critical dependencies for the October pilot.`
	},
	{
		n: "15",
		title: "EDITOR REVIEW",
		body: `The application must not attempt to recreate Premiere.

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

A full browser-based nonlinear editing system is outside scope.`
	},
	{
		n: "16",
		title: "DATABASE",
		body: `Use: Supabase PostgreSQL

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
     └── Review Decisions`
	},
	{
		n: "17",
		title: "MEDIA STORAGE",
		body: `Use: Supabase Storage

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
• source provenance is retained`
	},
	{
		n: "18",
		title: "BACKGROUND JOB PROCESSING",
		body: `Use: Trigger.dev

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

Paid operations require idempotency controls to prevent accidental duplicate generation and duplicate billing.`
	},
	{
		n: "19",
		title: "PROVIDER ADAPTER INTERFACE",
		body: `Create a common provider abstraction.

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

Provider-specific integration logic should not be spread throughout the application.`
	},
	{
		n: "20",
		title: "APPLICATION ARCHITECTURE",
		body: `Recommended October architecture:

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
Editor Review`
	},
	{
		n: "21",
		title: "HOSTING",
		body: `Recommended deployment architecture:

Web application — Vercel
Database — Supabase PostgreSQL
Authentication — Supabase Auth
Media storage — Supabase Storage
Workflow orchestration — Trigger.dev
Rendering — Dedicated render worker / Remotion-compatible environment
Monitoring — Sentry

Long-running video rendering should not depend on standard frontend/serverless request execution.`
	},
	{
		n: "22",
		title: "HARDWARE REQUIRED",
		body: `Under the recommended API-first pilot architecture:

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

Self-hosted generation should therefore not be an October dependency.`
	},
	{
		n: "23",
		title: "SOFTWARE / SERVICES REQUIRED",
		body: `Primary language — TypeScript
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
Presenter / UGC — Existing Floyo/current provider if technically viable`
	},
	{
		n: "24",
		title: "PROJECT RESOURCE REQUIREMENTS",
		body: `Technical Implementation Lead / Full-Stack Engineer
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
Additional specialist resources should only be introduced if a confirmed technical requirement emerges during implementation that cannot reasonably be handled by the core engineering team.`
	},
	{
		n: "25",
		title: "ACCESS REQUIRED BEFORE DEVELOPMENT",
		body: `Hyrax must provide the following.

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
• named approval owner`
	},
	{
		n: "26",
		title: "DEVELOPMENT ENVIRONMENTS",
		body: `Create separate:
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
GENERATION_API_KEY`
	},
	{
		n: "27",
		title: "OBSERVABILITY",
		body: `Every production job requires searchable operational logging.

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
• Trigger.dev execution history`
	},
	{
		n: "28",
		title: "COST CONTROL",
		body: `Every paid generation request must follow:
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

Each paid request requires an idempotency key or equivalent protection to prevent duplicate provider submissions.`
	},
	{
		n: "29",
		title: "OCTOBER BUILD ORDER",
		body: `WEEK 1 — FOUNDATION
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
Acceptance gate: An editor receives a usable first cut and does not have to rebuild the advert from scratch.`
	},
	{
		n: "30",
		title: "ACCEPTANCE CRITERIA",
		body: `AC01 — An authorised user can create a production job.
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
AC20 — The system can identify which manifest and source assets produced each render.`
	},
	{
		n: "31",
		title: "RECOMMENDED PILOT SUCCESS METRICS",
		body: `These are recommended engineering/pilot targets rather than requirements explicitly contained in the original overview.

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

A provider returning technically valid media is not itself a success condition. The output must be useful to production.`
	},
	{
		n: "32",
		title: "OUT OF SCOPE FOR OCTOBER",
		body: `The following should not block October delivery:
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
• bespoke AI music generation`
	},
	{
		n: "33",
		title: "RECOMMENDED SCOPE SIMPLIFICATIONS",
		body: `33.1 TwelveLabs
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
The architecture should remain modular enough for specialist agents to be added later without replacing the renderer or core production contracts.`
	},
	{
		n: "34",
		title: "MINIMUM OCTOBER PRODUCT",
		body: `The October product requires the following minimum capabilities:
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

Anything added beyond these capabilities should have a clear reason for being necessary to deliver or validate the October pilot.`
	},
	{
		n: "35",
		title: "FINAL OCTOBER DELIVERABLE",
		body: `By 31 October, the following end-to-end demonstration must be possible:

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

If the editor routinely discards the generated output and reconstructs the advert from scratch, the pilot has not met its primary objective.`
	}
];
function octoberSpecGoal() {
	return {
		id: SPEC_GOAL_ID,
		week: "w1",
		number: 1,
		title: "October 2026 Technical Specification, Scope of Work and Build Requirements",
		description: "HYRAX AI VIDEO PRODUCTION PILOT\nDocument purpose: Define the minimum technical system required to deliver the October pilot.\nPrimary acceptance date: 31 October 2026",
		notes: "",
		due: "2026-10-31",
		milestones: sections.map((section) => ({
			id: `w1-spec-${section.n}`,
			title: `${section.n}. ${section.title}`,
			status: "not_started",
			due: "",
			notes: section.body.trim()
		}))
	};
}
function boardHasSpec(goals) {
	return goals.some((goal) => goal.id === SPEC_GOAL_ID);
}
var STORAGE_KEY = "hyrax-october-tracker-v3";
var LEGACY_KEY = "hyrax-october-tracker-v2";
var STATUSES = [
	{
		id: "not_started",
		label: "Not started"
	},
	{
		id: "in_progress",
		label: "In progress"
	},
	{
		id: "blocked",
		label: "Blocked"
	},
	{
		id: "done",
		label: "Done"
	}
];
var WEEKS = [
	{
		id: "w1",
		label: "Week 1",
		range: "1–7 Oct"
	},
	{
		id: "w2",
		label: "Week 2",
		range: "8–14 Oct"
	},
	{
		id: "w3",
		label: "Week 3",
		range: "15–21 Oct"
	},
	{
		id: "w4",
		label: "Week 4",
		range: "22–31 Oct"
	}
];
function seedData() {
	return {
		project: "Hyrax AI Video Production Pilot",
		briefDate: "2026-09-28",
		answers: emptyAnswers(),
		people: [],
		goals: [octoberSpecGoal()]
	};
}
function loadState() {
	try {
		const raw = localStorage.getItem("hyrax-october-tracker-v3") ?? localStorage.getItem(LEGACY_KEY);
		if (raw) {
			const parsed = withAnswers(JSON.parse(raw));
			const state = {
				...parsed,
				people: parsed.people ?? []
			};
			if (boardHasSpec(state.goals)) return state;
		}
	} catch {}
	return seedData();
}
function saveState(state) {
	localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}
function nextNumber(goals, week) {
	const nums = goals.filter((g) => g.week === week).map((g) => g.number);
	return (nums.length ? Math.max(...nums) : 0) + 1;
}
function progress(goal) {
	const total = goal.milestones.length;
	const done = goal.milestones.filter((m) => m.status === "done").length;
	return {
		done,
		total,
		pct: total ? Math.round(done / total * 100) : 0
	};
}
function uid() {
	return crypto.randomUUID();
}
var WHO_KEY = "hyrax-team-email";
function TrackerApp() {
	const [state, setState] = (0, import_react.useState)(null);
	const [week, setWeek] = (0, import_react.useState)("all");
	const [status, setStatus] = (0, import_react.useState)("all");
	const [query, setQuery] = (0, import_react.useState)("");
	const [draft, setDraft] = (0, import_react.useState)(null);
	const [view, setView] = (0, import_react.useState)("board");
	const [toast, setToast] = (0, import_react.useState)("");
	const [who, setWho] = (0, import_react.useState)(null);
	const [gateReady, setGateReady] = (0, import_react.useState)(false);
	const [comments, setComments] = (0, import_react.useState)([]);
	const [teamAnswers, setTeamAnswers] = (0, import_react.useState)([]);
	(0, import_react.useEffect)(() => {
		setState(loadState());
		const saved = sessionStorage.getItem(WHO_KEY);
		setWho(saved ? matchTeam(saved) : null);
		setGateReady(true);
	}, []);
	(0, import_react.useEffect)(() => {
		if (state) saveState(state);
	}, [state]);
	(0, import_react.useEffect)(() => {
		if (!toast) return;
		const t = setTimeout(() => setToast(""), 1800);
		return () => clearTimeout(t);
	}, [toast]);
	(0, import_react.useEffect)(() => {
		if (!who) return;
		let cancel = false;
		loadShared({ data: { email: who.email } }).then((snap) => {
			if (cancel) return;
			setComments(snap.comments);
			setTeamAnswers(snap.answers);
			const goals = boardHasSpec(snap.goals) ? snap.goals : [octoberSpecGoal()];
			setState((prev) => {
				if (!prev) return prev;
				const mine = snap.answers.find((row) => row.author === who.name);
				return {
					...prev,
					goals,
					answers: mine ? mine.body : prev.answers
				};
			});
			if (!boardHasSpec(snap.goals) && who.role === "owner") saveGoals({ data: {
				email: who.email,
				goals
			} }).catch(() => setToast("Could not replace the old goals."));
		}).catch(() => setToast("Could not open the shared tracker."));
		return () => {
			cancel = true;
		};
	}, [who]);
	const counts = (0, import_react.useMemo)(() => {
		const ms = state?.goals.flatMap((g) => g.milestones) ?? [];
		return {
			goals: state?.goals.length ?? 0,
			milestones: ms.length,
			done: ms.filter((m) => m.status === "done").length,
			blocked: ms.filter((m) => m.status === "blocked").length
		};
	}, [state]);
	if (!gateReady || !state) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
		className: "mx-auto max-w-5xl px-4 py-10 text-muted",
		children: "Loading tracker…"
	});
	const memberOnly = who?.role === "member";
	if (!who) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navigate, { to: "/enter" });
	const member = who;
	const q = query.trim().toLowerCase();
	const visible = state.goals.filter((g) => {
		if (week !== "all" && g.week !== week) return false;
		const blob = `${g.title} ${g.description} ${g.notes} ${g.milestones.map((m) => `${m.title} ${m.notes}`).join(" ")}`.toLowerCase();
		if (q && !blob.includes(q)) return false;
		if (status !== "all" && !g.milestones.some((m) => m.status === status)) return false;
		return true;
	});
	function patch(fn) {
		setState((s) => s ? fn(s) : s);
	}
	function commit(fn) {
		setState((current) => {
			if (!current) return current;
			const next = fn(current);
			if (member.role === "owner") saveGoals({ data: {
				email: member.email,
				goals: next.goals
			} }).catch(() => setToast("Could not save the board."));
			return next;
		});
	}
	function editComment(id, body) {
		updateMyComment({ data: {
			email: member.email,
			id,
			body
		} }).then((row) => setComments((prev) => prev.map((comment) => comment.id === id ? row : comment))).catch(() => setToast("Could not edit that comment."));
	}
	function removeComment(id) {
		deleteMyComment({ data: {
			email: member.email,
			id
		} }).then(() => setComments((prev) => prev.filter((comment) => comment.id !== id))).catch(() => setToast("Could not delete that comment."));
	}
	function exportJson() {
		const blob = new Blob([JSON.stringify(state, null, 2)], { type: "application/json" });
		const a = document.createElement("a");
		a.href = URL.createObjectURL(blob);
		a.download = "hyrax-tracker.json";
		a.click();
		URL.revokeObjectURL(a.href);
		setToast("Exported");
	}
	function importJson(file) {
		file.text().then((text) => {
			try {
				const data = withAnswers(JSON.parse(text));
				if (!Array.isArray(data.goals)) throw new Error("Missing goals");
				setState(data);
				if (member.role === "owner") saveGoals({ data: {
					email: member.email,
					goals: data.goals
				} }).catch(() => setToast("Could not save the board."));
				setToast("Imported");
			} catch {
				setToast("Import failed");
			}
		});
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-bg text-fg",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "sticky top-0 z-20 border-b border-border bg-bg/95 backdrop-blur",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-5xl flex-wrap items-center gap-4 px-4 py-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-44",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-mono text-xs tracking-wide text-primary",
									children: "HYRAX"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
									className: "text-lg font-semibold leading-tight",
									children: "October tracker"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-sm text-muted",
									children: [
										who.name,
										" · ",
										who.role,
										".",
										" ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											type: "button",
											className: "underline",
											onClick: () => {
												sessionStorage.removeItem(WHO_KEY);
												setWho(null);
											},
											children: "Use another email"
										})
									]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex rounded-lg border border-border p-1",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									className: `min-h-11 rounded-md px-3 text-sm ${view === "board" ? "bg-primary font-semibold text-primary-ink" : ""}`,
									onClick: () => setView("board"),
									children: "Board"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									className: `min-h-11 rounded-md px-3 text-sm ${view === "answers" ? "bg-primary font-semibold text-primary-ink" : ""}`,
									onClick: () => setView("answers"),
									children: "Answers"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									className: `min-h-11 rounded-md px-3 text-sm ${view === "people" ? "bg-primary font-semibold text-primary-ink" : ""}`,
									onClick: () => setView("people"),
									children: "Team"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
							className: "flex flex-1 flex-wrap gap-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
									label: "Goals",
									value: counts.goals
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
									label: "Milestones",
									value: counts.milestones
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
									label: "Done",
									value: counts.done
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
									label: "Blocked",
									value: counts.blocked
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap gap-2",
							children: [
								!memberOnly && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									className: "inline-flex min-h-11 items-center gap-2 rounded-lg bg-primary px-3 text-sm font-semibold text-primary-ink",
									onClick: () => setDraft({
										kind: "goal",
										isNew: true,
										goal: blankGoal(state.goals, week === "all" ? "w2" : week)
									}),
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { size: 16 }), " Goal"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconButton, {
									label: "Export",
									onClick: exportJson,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { size: 16 })
								}),
								!memberOnly && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "inline-flex min-h-11 cursor-pointer items-center gap-2 rounded-lg border border-border bg-surface px-3 text-sm",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Upload, { size: 16 }),
										" Import",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											type: "file",
											accept: "application/json",
											className: "sr-only",
											onChange: (e) => {
												const f = e.target.files?.[0];
												if (f) importJson(f);
												e.target.value = "";
											}
										})
									]
								}),
								!memberOnly && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconButton, {
									label: "Reset",
									onClick: () => {
										if (confirm("Replace the shared board with the original Week 1 seed?")) {
											const next = seedData();
											setState(next);
											saveGoals({ data: {
												email: who.email,
												goals: next.goals
											} }).catch(() => setToast("Could not save the board."));
											setToast("Reset");
										}
									},
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCcw, { size: 16 })
								})
							]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-5xl flex-wrap gap-2 px-4 pb-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
							className: "min-h-11 rounded-lg border border-border bg-surface px-3 text-sm",
							value: week,
							onChange: (e) => setWeek(e.target.value),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "all",
								children: "All weeks"
							}), WEEKS.map((w) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: w.id,
								children: w.label
							}, w.id))]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
							className: "min-h-11 rounded-lg border border-border bg-surface px-3 text-sm",
							value: status,
							onChange: (e) => setStatus(e.target.value),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "all",
								children: "Any status"
							}), STATUSES.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: s.id,
								children: s.label
							}, s.id))]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "flex min-h-11 min-w-52 flex-1 items-center gap-2 rounded-lg border border-border bg-surface px-3 text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, {
								size: 16,
								className: "text-muted"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								value: query,
								onChange: (e) => setQuery(e.target.value),
								placeholder: "Search",
								className: "w-full bg-transparent outline-none placeholder:text-muted"
							})]
						})
					]
				})]
			}),
			view === "answers" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnswersView, {
				answers: state.answers,
				onChange: (answers) => {
					setState({
						...state,
						answers
					});
					saveMyAnswers({ data: {
						email: who.email,
						answers
					} }).then(() => {
						setTeamAnswers((prev) => [...prev.filter((row) => row.author !== who.name), {
							author: who.name,
							body: answers
						}]);
						setToast(`Saved under ${who.name}`);
					}).catch(() => setToast("Could not save answers."));
				}
			}), teamAnswers.filter((row) => row.author !== who.name).length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mx-auto max-w-5xl space-y-3 px-4 pb-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-sm font-semibold",
					children: "Everyone else's answers"
				}), teamAnswers.filter((row) => row.author !== who.name).map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "rounded-xl border border-border bg-surface p-4 text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-medium",
						children: row.author
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 whitespace-pre-wrap text-muted",
						children: row.body.sow.building || "No scope written yet."
					})]
				}, row.author))]
			})] }) : view === "people" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PeopleView, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				className: "mx-auto max-w-5xl px-4 py-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "mb-6 rounded-xl border border-border bg-surface p-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-2 flex items-center justify-between gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-sm font-semibold",
							children: "Team comments"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "min-h-11 text-sm text-primary",
							onClick: () => {
								loadShared({ data: { email: who.email } }).then((snap) => {
									setComments(snap.comments);
									setTeamAnswers(snap.answers);
									if (snap.goals.length > 0) setState((prev) => prev ? {
										...prev,
										goals: snap.goals
									} : prev);
									setToast("Team comments updated");
								}).catch(() => setToast("Could not refresh comments."));
							},
							children: "Refresh"
						})]
					}), comments.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted",
						children: "No comments yet. A comment here is visible to Mary, Jay, and Ben."
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "space-y-2",
						children: comments.map((comment) => {
							const goal = state.goals.find((item) => item.id === comment.goal_id);
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "text-sm",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-medium",
										children: comment.author
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "text-muted",
										children: [
											" ",
											"on ",
											goal ? goal.title : "a goal",
											": ",
											comment.body
										]
									}),
									comment.author === member.name && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CommentActions, {
										onEdit: (body) => editComment(comment.id, body),
										onDelete: () => removeComment(comment.id),
										body: comment.body
									})
								]
							}, comment.id);
						})
					})]
				}), WEEKS.filter((w) => week === "all" || week === w.id).map((w) => {
					const goals = visible.filter((g) => g.week === w.id).sort((a, b) => a.number - b.number);
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "mb-8",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mb-3 flex items-baseline justify-between gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
								className: "font-mono text-xs tracking-widest text-muted uppercase",
								children: [
									w.label,
									" · ",
									w.range,
									" 2026"
								]
							}), !memberOnly && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: "text-sm text-primary",
								onClick: () => setDraft({
									kind: "goal",
									isNew: true,
									goal: blankGoal(state.goals, w.id)
								}),
								children: "Add goal"
							})]
						}), goals.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "rounded-xl border border-dashed border-border px-4 py-8 text-center text-sm text-muted",
							children: "Nothing planned for this week yet."
						}) : goals.map((g) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GoalCard, {
							goal: g,
							onEdit: () => setDraft({
								kind: "goal",
								isNew: false,
								goal: structuredClone(g)
							}),
							onDelete: () => {
								if (confirm("Delete this goal and its milestones?")) commit((s) => ({
									...s,
									goals: s.goals.filter((x) => x.id !== g.id)
								}));
							},
							onAddMs: () => setDraft({
								kind: "ms",
								gid: g.id,
								isNew: true,
								ms: {
									id: uid(),
									title: "",
									status: "not_started",
									due: "",
									notes: ""
								}
							}),
							onEditMs: (m) => setDraft({
								kind: "ms",
								gid: g.id,
								isNew: false,
								ms: structuredClone(m)
							}),
							onStatus: (mid, next) => {
								patch((s) => ({
									...s,
									goals: s.goals.map((goal) => goal.id !== g.id ? goal : {
										...goal,
										milestones: goal.milestones.map((m) => m.id === mid ? {
											...m,
											status: next
										} : m)
									})
								}));
								updateMilestone({ data: {
									email: who.email,
									goalId: g.id,
									milestoneId: mid,
									status: next
								} }).catch(() => setToast("Could not save the status."));
							},
							onDue: (mid, due) => {
								patch((s) => ({
									...s,
									goals: s.goals.map((goal) => goal.id !== g.id ? goal : {
										...goal,
										milestones: goal.milestones.map((m) => m.id === mid ? {
											...m,
											due
										} : m)
									})
								}));
								updateMilestone({ data: {
									email: who.email,
									goalId: g.id,
									milestoneId: mid,
									due
								} }).catch(() => setToast("Could not save the due date."));
							},
							onNotes: (mid, notes) => commit((s) => ({
								...s,
								goals: s.goals.map((goal) => goal.id !== g.id ? goal : {
									...goal,
									milestones: goal.milestones.map((m) => m.id === mid ? {
										...m,
										notes
									} : m)
								})
							})),
							onDeleteMs: (mid) => commit((s) => ({
								...s,
								goals: s.goals.map((goal) => goal.id !== g.id ? goal : {
									...goal,
									milestones: goal.milestones.filter((m) => m.id !== mid)
								})
							})),
							locked: memberOnly,
							comments: comments.filter((c) => c.goal_id === g.id),
							me: member.name,
							onComment: (body) => {
								addComment({ data: {
									email: who.email,
									goalId: g.id,
									body
								} }).then((row) => setComments((prev) => [...prev, row])).catch(() => setToast("Could not add the comment."));
							},
							onEditComment: editComment,
							onDeleteComment: removeComment
						}, g.id))]
					}, w.id);
				})]
			}),
			draft && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Editor, {
				draft,
				onClose: () => setDraft(null),
				onSave: (next) => {
					if (next.kind === "goal") commit((s) => ({
						...s,
						goals: next.isNew ? [...s.goals, next.goal] : s.goals.map((g) => g.id === next.goal.id ? next.goal : g)
					}));
					else commit((s) => ({
						...s,
						goals: s.goals.map((g) => {
							if (g.id !== next.gid) return g;
							return {
								...g,
								milestones: next.isNew ? [...g.milestones, next.ms] : g.milestones.map((m) => m.id === next.ms.id ? next.ms : m)
							};
						})
					}));
					setDraft(null);
				}
			}),
			toast && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "fixed right-4 bottom-4 rounded-lg border border-border bg-surface px-4 py-2 text-sm",
				children: toast
			})
		]
	});
}
function blankGoal(goals, week) {
	return {
		id: uid(),
		week,
		number: nextNumber(goals, week),
		title: "",
		description: "",
		notes: "",
		due: "",
		milestones: []
	};
}
function Stat({ label, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-w-20 rounded-lg border border-border bg-surface px-3 py-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
			className: "text-xs text-muted",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
			className: "text-lg font-semibold leading-none",
			children: value
		})]
	});
}
function IconButton({ label, onClick, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		type: "button",
		"aria-label": label,
		className: "inline-flex min-h-11 items-center gap-2 rounded-lg border border-border bg-surface px-3 text-sm",
		onClick,
		children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: label })]
	});
}
function GoalCard({ goal, onEdit, onDelete, onAddMs, onEditMs, onStatus, onDue, onNotes, onDeleteMs, locked, comments, me, onComment, onEditComment, onDeleteComment }) {
	const p = progress(goal);
	const [open, setOpen] = (0, import_react.useState)({});
	const allOpen = goal.milestones.length > 0 && goal.milestones.every((m) => open[m.id]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "mb-3 overflow-hidden rounded-xl border border-border bg-surface",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex gap-3 p-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "mt-0.5 h-fit rounded-md bg-primary/15 px-2 py-1 font-mono text-xs text-primary",
						children: ["G", goal.number]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0 flex-1",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-base font-semibold",
								children: goal.title
							}),
							goal.description && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm leading-relaxed whitespace-pre-wrap text-muted",
								children: goal.description
							}),
							goal.notes && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm whitespace-pre-wrap",
								children: goal.notes
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "hidden w-28 shrink-0 text-right sm:block",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "h-1.5 overflow-hidden rounded-full bg-surface-2",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "h-full bg-primary",
								style: { width: `${p.pct}%` }
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-1 text-xs text-muted",
							children: [
								p.done,
								"/",
								p.total,
								goal.due ? ` · ${goal.due}` : ""
							]
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex justify-end border-t border-border px-4 py-2",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "min-h-11 text-sm text-primary",
					onClick: () => setOpen(allOpen ? {} : Object.fromEntries(goal.milestones.map((m) => [m.id, true]))),
					children: allOpen ? "Minimise all" : "Maximise all"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", { children: goal.milestones.map((m) => {
				const expanded = !!open[m.id];
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "border-t border-border",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-2 px-4 py-3 sm:grid-cols-[auto_1fr_9.5rem_9rem_auto] sm:items-start",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusMark, { status: m.status }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "min-w-0",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									className: "text-left text-sm font-medium",
									"aria-expanded": expanded,
									onClick: () => setOpen((current) => ({
										...current,
										[m.id]: !current[m.id]
									})),
									children: [
										expanded ? "▾" : "▸",
										" ",
										m.title
									]
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
								"aria-label": "Status",
								className: "min-h-11 rounded-lg border border-border bg-bg px-2 text-sm",
								value: m.status,
								onChange: (e) => onStatus(m.id, e.target.value),
								children: STATUSES.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: s.id,
									children: s.label
								}, s.id))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "flex min-h-11 items-center gap-2 rounded-lg border border-border bg-bg px-2 text-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Calendar, {
									size: 14,
									className: "shrink-0 text-muted"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "date",
									"aria-label": "Due date",
									className: "w-full bg-transparent outline-none",
									value: m.due,
									onChange: (e) => onDue(m.id, e.target.value)
								})]
							}),
							!locked && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex gap-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									className: "min-h-11 px-2 text-sm text-muted",
									onClick: () => onEditMs(m),
									children: "Edit"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									"aria-label": "Delete milestone",
									className: "min-h-11 px-2 text-alert",
									onClick: () => onDeleteMs(m.id),
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { size: 16 })
								})]
							})
						]
					}), expanded && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MilestoneBody, {
						notes: m.notes,
						locked,
						label: m.title,
						onSave: (notes) => onNotes(m.id, notes)
					})]
				}, m.id);
			}) }),
			!locked && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex justify-between border-t border-border px-4 py-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "min-h-11 text-sm text-primary",
					onClick: onAddMs,
					children: "Add milestone"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "min-h-11 text-sm",
						onClick: onEdit,
						children: "Edit goal"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "min-h-11 text-sm text-alert",
						onClick: onDelete,
						children: "Delete"
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GoalComments, {
				comments,
				me,
				onComment,
				onEditComment,
				onDeleteComment
			})
		]
	});
}
function MilestoneBody({ notes, locked, label, onSave }) {
	const [value, setValue] = (0, import_react.useState)(notes);
	(0, import_react.useEffect)(() => setValue(notes), [notes]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "border-t border-border bg-bg/40 px-4 py-3",
		children: locked ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-sm leading-relaxed whitespace-pre-wrap",
			children: notes
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
			className: "field min-h-40 font-sans text-sm leading-relaxed",
			"aria-label": `Edit ${label}`,
			value,
			onChange: (e) => setValue(e.target.value),
			onBlur: () => {
				if (value !== notes) onSave(value);
			}
		})
	});
}
function StatusMark({ status }) {
	const cls = "mt-1 text-muted";
	if (status === "done") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, {
		size: 16,
		className: "mt-1 text-primary"
	});
	if (status === "blocked") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(OctagonAlert, {
		size: 16,
		className: "mt-1 text-alert"
	});
	if (status === "in_progress") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleDashed, {
		size: 16,
		className: cls
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Circle, {
		size: 16,
		className: cls
	});
}
function Editor({ draft, onClose, onSave }) {
	const [local, setLocal] = (0, import_react.useState)(draft);
	const goal = local.kind === "goal" ? local.goal : null;
	const ms = local.kind === "ms" ? local.ms : null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "fixed inset-0 z-40 flex items-start justify-center bg-bg/70 px-4 pt-16",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
			className: "max-h-[85vh] w-full max-w-3xl overflow-y-auto rounded-xl border border-border bg-surface p-4",
			onSubmit: (e) => {
				e.preventDefault();
				if (local.kind === "goal" && !local.goal.title.trim()) return;
				if (local.kind === "ms" && !local.ms.title.trim()) return;
				onSave(local);
			},
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mb-3 text-base font-semibold",
					children: local.kind === "goal" ? local.isNew ? "New goal" : "Edit goal" : local.isNew ? "New milestone" : "Edit milestone"
				}),
				goal && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Week",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
							className: "field",
							value: goal.week,
							onChange: (e) => setLocal({
								...local,
								kind: "goal",
								goal: {
									...goal,
									week: e.target.value
								}
							}),
							children: WEEKS.map((w) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("option", {
								value: w.id,
								children: [
									w.label,
									" · ",
									w.range
								]
							}, w.id))
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Number",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							className: "field",
							type: "number",
							min: 1,
							value: goal.number,
							onChange: (e) => setLocal({
								...local,
								kind: "goal",
								goal: {
									...goal,
									number: Number(e.target.value) || 1
								}
							})
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Title",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							className: "field",
							value: goal.title,
							required: true,
							onChange: (e) => setLocal({
								...local,
								kind: "goal",
								goal: {
									...goal,
									title: e.target.value
								}
							})
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Description",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
							className: "field min-h-24",
							value: goal.description,
							onChange: (e) => setLocal({
								...local,
								kind: "goal",
								goal: {
									...goal,
									description: e.target.value
								}
							})
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Due",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							className: "field",
							type: "date",
							value: goal.due,
							onChange: (e) => setLocal({
								...local,
								kind: "goal",
								goal: {
									...goal,
									due: e.target.value
								}
							})
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Notes",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
							className: "field min-h-20",
							value: goal.notes,
							onChange: (e) => setLocal({
								...local,
								kind: "goal",
								goal: {
									...goal,
									notes: e.target.value
								}
							})
						})
					})
				] }),
				ms && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Title",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							className: "field",
							required: true,
							value: ms.title,
							onChange: (e) => {
								const title = e.target.value;
								setLocal((d) => d.kind === "ms" ? {
									...d,
									ms: {
										...d.ms,
										title
									}
								} : d);
							}
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Status",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
							className: "field",
							value: ms.status,
							onChange: (e) => {
								const status = e.target.value;
								setLocal((d) => d.kind === "ms" ? {
									...d,
									ms: {
										...d.ms,
										status
									}
								} : d);
							},
							children: STATUSES.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: s.id,
								children: s.label
							}, s.id))
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Due",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							className: "field",
							type: "date",
							value: ms.due,
							onChange: (e) => {
								const due = e.target.value;
								setLocal((d) => d.kind === "ms" ? {
									...d,
									ms: {
										...d.ms,
										due
									}
								} : d);
							}
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Notes",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
							className: "field min-h-64",
							value: ms.notes,
							onChange: (e) => {
								const notes = e.target.value;
								setLocal((d) => d.kind === "ms" ? {
									...d,
									ms: {
										...d.ms,
										notes
									}
								} : d);
							}
						})
					})
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-4 flex justify-end gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "min-h-11 rounded-lg border border-border px-4 text-sm",
						onClick: onClose,
						children: "Cancel"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "submit",
						className: "min-h-11 rounded-lg bg-primary px-4 text-sm font-semibold text-primary-ink",
						children: "Save"
					})]
				})
			]
		})
	});
}
function Field({ label, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "mb-3 block text-sm text-muted",
		children: [label, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-1 text-fg",
			children
		})]
	});
}
function EmailGate({ onMatch }) {
	const [email, setEmail] = (0, import_react.useState)("");
	const [error, setError] = (0, import_react.useState)("");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
		className: "grid min-h-screen place-items-center bg-bg px-4 text-fg",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
			className: "w-full max-w-md space-y-3 rounded-xl border border-border bg-surface p-5",
			onSubmit: (e) => {
				e.preventDefault();
				const member = matchTeam(email);
				if (!member) {
					setError("That email is not on the team.");
					return;
				}
				onMatch(member);
			},
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-mono text-xs tracking-widest text-primary uppercase",
					children: "Hyrax"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold",
					children: "Team link"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm leading-relaxed text-muted",
					children: "Enter the email already on the team list. No Google account. If it matches, you can comment and add answers under your name."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					className: "field",
					type: "text",
					inputMode: "email",
					required: true,
					autoComplete: "email",
					placeholder: "Email",
					value: email,
					onChange: (e) => setEmail(e.target.value)
				}),
				error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-alert",
					children: error
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "submit",
					className: "min-h-11 w-full rounded-lg bg-primary text-sm font-semibold text-primary-ink",
					children: "Continue"
				})
			]
		})
	});
}
function CommentActions({ body, onEdit, onDelete }) {
	const [editing, setEditing] = (0, import_react.useState)(false);
	const [draft, setDraft] = (0, import_react.useState)(body);
	if (editing) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		className: "mt-2 flex gap-2",
		onSubmit: (e) => {
			e.preventDefault();
			if (!draft.trim()) return;
			onEdit(draft.trim());
			setEditing(false);
		},
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				className: "field",
				value: draft,
				onChange: (e) => setDraft(e.target.value)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "submit",
				className: "min-h-11 rounded-lg border border-border px-3 text-sm",
				children: "Save"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: "min-h-11 px-2 text-sm text-muted",
				onClick: () => setEditing(false),
				children: "Cancel"
			})
		]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: "ml-2 inline-flex gap-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			className: "text-sm text-primary",
			onClick: () => {
				setDraft(body);
				setEditing(true);
			},
			children: "Edit"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			className: "text-sm text-alert",
			onClick: () => {
				if (confirm("Delete your comment?")) onDelete();
			},
			children: "Delete"
		})]
	});
}
function GoalComments({ comments, me, onComment, onEditComment, onDeleteComment }) {
	const [text, setText] = (0, import_react.useState)("");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-2 border-t border-border px-4 py-3",
		children: [comments.map((comment) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "text-sm",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "font-medium",
					children: [comment.author, "."]
				}),
				" ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-muted",
					children: comment.body
				}),
				comment.author === me && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CommentActions, {
					body: comment.body,
					onEdit: (body) => onEditComment(comment.id, body),
					onDelete: () => onDeleteComment(comment.id)
				})
			]
		}, comment.id)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
			className: "flex gap-2",
			onSubmit: (e) => {
				e.preventDefault();
				if (!text.trim()) return;
				onComment(text.trim());
				setText("");
			},
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				className: "field",
				value: text,
				placeholder: "Comment under your name",
				onChange: (e) => setText(e.target.value)
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "submit",
				className: "min-h-11 rounded-lg border border-border px-3 text-sm",
				children: "Comment"
			})]
		})]
	});
}
//#endregion
export { TrackerApp as n, EmailGate as t };
