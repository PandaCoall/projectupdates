import { o as __toESM } from "../_runtime.mjs";
import { S as require_jsx_runtime, Y as require_react, y as Navigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as TSS_SERVER_FUNCTION, r as getServerFnById, t as createServerFn } from "./ssr.mjs";
import { n as matchTeam, t as TEAM } from "./team-C3E8MDHu.mjs";
import { a as RotateCcw, c as Download, d as CircleCheck, f as Calendar, i as Search, l as Circle, o as Plus, r as Trash2, s as OctagonAlert, t as Upload, u as CircleDashed } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/tracker-app-DITTB0ny.js
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
var INCLUDED = [
	["Planning and specification", "Finalise architecture, data contracts, dependencies, generation-platform selection, responsibilities and acceptance criteria."],
	["Private application", "Authentication, role-based access, job creation, persistent progress, failure visibility and separate development/staging/production configuration."],
	["Generation layer", "Integrate one presenter recipe and one B-roll generation route initially. Version recipes and retain provider/model settings, task IDs, costs and outputs."],
	["Background processing", "Asynchronous generation, polling, downloads, analysis and rendering; budget reservations, safe retries, reconciliation and cancellation."],
	["Asset library and tagging", "Private uploads and retention; originals, proxies and thumbnails; automated descriptions and tags; usable segment ranges; source, rights, restrictions and approval records. Retain valid originals with no usable ranges and mark them clearly."],
	["Search and retrieval", "Search approved assets before generating more. Implement semantic retrieval and filter results by campaign permissions, rights, expiry and approval status."],
	["Script verification", "Transcription and timing checks against the approved script. Material messaging differences stop progression for review."],
	["AI edit decisions", "Generate constrained editorial instructions covering asset selection, timing, crops, captions, audio, motion, CTA/end frame and approved alternatives. Validate and retain these as versioned Creative Manifests."],
	["Deterministic rendering", "Assemble presenter, B-roll, captions, required voice/audio, music/sound, approved motion, CTA, end frame and mandatory copy using Remotion and media-processing tools."],
	["Editor review", "Show the cut with script beats, selected assets, captions, QA flags and approved alternatives. Support shot replacement, permitted property changes and rejection reasons. Changes create a new manifest/render and rerun QA."],
	["QA and approval", "Technical checks, agreed automated brand/policy checks, recorded overrides and named human approval tied to an exact render version."],
	["Provider flexibility", "Hyrax-owned adapter contracts. Test a second provider during November where access permits; do not make it a prerequisite for the primary production path."],
	["Operational readiness", "Monitoring, audit history, deployment documentation, recovery procedures, rollback, operator training and production verification."],
	["Evaluation", "Measure editor touch time, total human labour, elapsed production time, costs, failures and complete rebuilds."]
];
var MILESTONES = [
	[
		"29 September–2 October",
		"Agreed implementation pack and initial platform decisions",
		"Scope, dependency owners and acceptance criteria confirmed."
	],
	[
		"October — Phase 1",
		"Private foundation, complete assembly, initial generation integrations, asset library/tagging/search, AI manifest creation and minimum review controls",
		"An approved script produces a complete, useful first cut. Build 1 specifically proves an editor can continue a full rendered cut through the tested hand-off, with private inputs, manifest and output versions retained."
	],
	[
		"November — Phase 2",
		"Improved retrieval and editorial quality, completed review/approval controls, reliable recovery, monitoring and release candidate",
		"Agreed functionality complete in staging; ready for formal acceptance testing."
	],
	[
		"December — Phase 3",
		"System and editor acceptance testing, defect fixes, production deployment, training and stabilisation",
		"Critical tests pass, named production approval is recorded, and recovery/rollback are verified. Deployment target: 14–18 December."
	]
];
var BOUNDARIES = [
	"One campaign/product.",
	"One approximately 30-second, 9:16 advert per job.",
	"One presenter recipe and one B-roll generation route.",
	"A curated pilot asset library.",
	"Bounded editor corrections using approved assets and properties."
];
var EXCLUDED = [
	"Bulk ingestion/tagging of hundreds of thousands of existing videos.",
	"Proprietary model training or a self-hosted GPU fleet.",
	"An unrestricted browser timeline replacing Premiere.",
	"Unlimited variants, multi-platform cut-downs or broad campaign rollout.",
	"Autonomous strategy, unapproved messaging or automatic publishing.",
	"Guaranteed commercial advertising performance.",
	"Ongoing support beyond the agreed December stabilisation period."
];
var ACCEPTANCE = [
	"All required advert elements are present and technically valid.",
	"Editors can continue the cut without reconstructing the entire advert.",
	"Assets and segments are eligible for the intended use.",
	"Inputs, generation attempts, costs, manifests, renders, corrections and approvals are traceable.",
	"Interrupted work can recover safely.",
	"Private data and media are accessible only to authorised users.",
	"Measured production savings meet the agreed target without reducing accepted quality."
];
var OBJECTIVE = "Build a private production system that takes an approved script through asset retrieval/generation, asset analysis, AI editorial planning, deterministic rendering, QA, editor review and named approval. The system must produce a complete first-cut advert that an editor prefers to use rather than starting from a blank Premiere timeline. If editors discard the cut and rebuild it, the quality milestone has not been achieved.";
var SOW_SEARCH = [
	"Hyrax AI Advert Production Scope of Work",
	OBJECTIVE,
	...INCLUDED.flat(),
	...MILESTONES.flat(),
	...BOUNDARIES,
	...EXCLUDED,
	...ACCEPTANCE
].join(" ");
function isWeekOneSow(goal, milestoneId, firstId) {
	return goal.week === "w1" && goal.number === 1 && milestoneId === firstId;
}
function Table({ headers, rows }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "overflow-x-auto rounded-lg border border-border",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
			className: "w-full min-w-[42rem] border-collapse text-left text-sm",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", {
				className: "bg-bg text-xs tracking-wide text-muted uppercase",
				children: headers.map((header) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
					className: "px-3 py-2 font-medium",
					children: header
				}, header))
			}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: rows.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", {
				className: "border-t border-border align-top",
				children: row.map((cell, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
					className: index === 0 ? "px-3 py-2 font-medium" : "px-3 py-2 text-muted",
					children: cell
				}, index))
			}, row[0])) })]
		})
	});
}
function Bullets({ items }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
		className: "list-disc space-y-1 pl-5 text-muted",
		children: items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: item }, item))
	});
}
function SowPanel() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "space-y-5 text-sm leading-relaxed",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
				className: "text-base font-semibold",
				children: "Hyrax AI Advert Production — Scope of Work"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
				className: "mt-2 grid gap-1 text-muted sm:grid-cols-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: "Project period: 29 September–31 December 2026" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: "Planning: 29 September–2 October" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: "Development: October–November" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: "Formal testing, production deployment and stabilisation: December" })
				]
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h5", {
				className: "mb-1 font-semibold",
				children: "Objective"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-muted",
				children: OBJECTIVE
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h5", {
				className: "mb-2 font-semibold",
				children: "Included work"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Table, {
				headers: ["Area", "Scope"],
				rows: INCLUDED
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h5", {
					className: "mb-2 font-semibold",
					children: "Delivery milestones"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Table, {
					headers: [
						"Period",
						"Deliverables",
						"Acceptance"
					],
					rows: MILESTONES
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-muted",
					children: "A prepared manifest is acceptable for Build 1’s assembly test. AI-produced editorial decisions remain required for the October end-to-end pilot target."
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h5", {
					className: "mb-1 font-semibold",
					children: "Scope boundaries"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mb-2 text-muted",
					children: "The initial production path is limited to:"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bullets, { items: BOUNDARIES }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-muted",
					children: "Additional campaigns, formats, recipes or providers require a scope decision after the initial path passes its acceptance gate."
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h5", {
					className: "mb-1 font-semibold",
					children: "Excluded work"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bullets, { items: EXCLUDED }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-muted",
					children: "Self-hosted ComfyUI remains an assessed architectural option. Implementing it is included only if selected as the initial generation route and its infrastructure responsibilities are explicitly agreed."
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h5", {
					className: "mb-1 font-semibold",
					children: "Acceptance and measurement"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mb-2 text-muted",
					children: "Before comparative testing, agree the quality rubric and numerical improvement target with the lead editor and second editor."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mb-2",
					children: "Acceptance requires:"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bullets, { items: ACCEPTANCE }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-muted",
					children: "A 25% reduction in median editor touch time is a proposed target, subject to agreement. Total human labour and elapsed time must also be reported so work is not merely shifted elsewhere."
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h5", {
					className: "mb-1 font-semibold",
					children: "Dependencies and responsibilities"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-muted",
					children: "Hyrax supplies company-owned accounts, provider access, billing caps, approved scripts, reference adverts/source media, brand assets, rights information, campaign rules, two editors and a named release owner."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-muted",
					children: "The delivery team supplies implementation, integration, technical testing, documentation and deployment. The schedule assumes a dedicated implementation lead with regular senior engineering review."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-muted",
					children: "Failed gates must be resolved, narrowed explicitly or rescheduled. New functionality should not be added during December’s testing and deployment phase unless necessary to meet the agreed scope."
				})
			] })
		]
	});
}
var PAGES = [
	{
		src: "/flow/page-1.jpg",
		title: "Ad Production Workflow — Overview",
		note: "Six stages from job creation to release. Detailed flow on the next two pages. Footage scrub and ID tool on the last page."
	},
	{
		src: "/flow/page-2.jpg",
		title: "Part 1 of 2 — Intake, job creation and asset pack (Steps 0–4)",
		note: "Nothing proceeds until each gate is passed. Red boxes are blocked states."
	},
	{
		src: "/flow/page-3.jpg",
		title: "Part 2 of 2 — Manifest, render, QA, review and approval (Steps 5–9)",
		note: "Every failure is visible and recorded. Every override records who made it and why."
	},
	{
		src: "/flow/page-4.jpg",
		title: "Separate tool — Footage scrubbing and identification script",
		note: "Triggered when a user uploads their own footage. Processes it, tags it, and stores it for recall."
	}
];
var FLOW_SEARCH = "Ad Production Workflow flowchart Create a job Build asset pack Prepare edit plan Render first cut Run checks Editor review release Footage Scrub Identification Steps 0 1 2 3 4 5 6 7 8 9 Creative Manifest budget QA approval";
function isWeekOneFlow(goal) {
	return goal.week === "w1" && goal.number === 2;
}
function FlowPanel() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "space-y-4 border-t border-border bg-bg/40 px-4 py-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-wrap items-end justify-between gap-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
				className: "text-base font-semibold",
				children: "Ad Production Flow Chart"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-muted",
				children: "The flowchart document, four pages."
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				className: "min-h-11 text-sm text-primary underline",
				href: "/flow/ad-production-flowchart.pdf",
				download: true,
				children: "Download PDF"
			})]
		}), PAGES.map((page, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
			className: "space-y-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figcaption", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-sm font-medium",
				children: [
					"Page ",
					index + 1,
					". ",
					page.title
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-muted",
				children: page.note
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: page.src,
				alt: page.title,
				className: "w-full rounded-lg border border-border bg-white"
			})]
		}, page.src))]
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
function id() {
	return crypto.randomUUID();
}
function ms(title, due, notes) {
	return {
		id: id(),
		title,
		status: "not_started",
		due,
		notes
	};
}
function seedData() {
	return {
		project: "Hyrax AI Video Production Pilot",
		briefDate: "2026-09-28",
		answers: emptyAnswers(),
		people: [],
		goals: [
			{
				id: id(),
				week: "w1",
				number: 1,
				title: "Define Scope of Work",
				description: "Turn the 28 Sep 2026 overview into a concise October SOW: what is being built, in and out of scope, and deliverables. Flag anything unrealistic or simpler to do another way.\nProduct: controlled internal line from an approved script to a near-finished 9:16 first cut. AI proposes bounded decisions. Deterministic software executes them.\nPilot is narrow: one campaign or product, one approved script, one ~30s 9:16, one presenter workflow, one ad per job.",
				notes: "",
				due: "2026-10-07",
				milestones: [
					ms("Write concise October SOW (in / out of scope + deliverables)", "2026-10-03", ""),
					ms("Define the editor first-cut acceptance bar", "2026-10-07", "Editor prefers the system first cut over a blank Premiere timeline. If they throw it away and rebuild, the milestone is not met."),
					ms("Confirm the end-to-end basic path", "2026-10-07", "UGC/presenter, B-roll, captions, voice/audio where required, music/sound, CTA/end frame, assembled first cut.")
				]
			},
			{
				id: id(),
				week: "w1",
				number: 2,
				title: "Create Process Flowchart",
				description: "Turn overview steps 0–9 and the systems table into a technical flowchart of real systems and hand-offs.",
				notes: "",
				due: "2026-10-07",
				milestones: [
					ms("Map job creation through asset retrieval, storage and analysis", "2026-10-05", "Steps 0–4: rules, job and budget, presenter and supporting assets, private retention and rights, search before generate."),
					ms("Map Creative Manifest through render, QA, review and approval", "2026-10-05", "Steps 5–9: transcript and manifest, deterministic render, QA and policy checks, bounded editor correction, named approval."),
					ms("Mark providers, async work, AI versus deterministic, and human gates", "2026-10-07", "AI proposes. The renderer executes. Human gates are editor review and policy, brand or release approval.")
				]
			},
			{
				id: id(),
				week: "w1",
				number: 3,
				title: "Prepare Technical Specification / Build Guide",
				description: "Turn the overview into the implementation spec: data contracts, APIs, integrations, job states, storage, Creative Manifest, rendering, auth, deployment, error and retry. The proposed stack is a direction, not a mandate.",
				notes: "Answered outside this tracker. Use the development pipeline for this goal.",
				due: "2026-10-07",
				milestones: [
					ms("Specify data model, schemas, job states and storage", "2026-10-06", "Contracts: Campaign/Product Policy, Job, Asset, Asset Segment, Creative Manifest, Review Decision, Provider Attempt."),
					ms("Specify APIs, integrations, Creative Manifest and rendering flow", "2026-10-06", "Proposed direction: Next.js app, provider adapters, Remotion plus FFmpeg from the manifest. Recommend simpler alternatives where justified."),
					ms("Specify auth, deployment, error and retry", "2026-10-07", "Keep controlled inputs, repeatability, traceability, private storage, rights awareness and human approval.")
				]
			},
			{
				id: id(),
				week: "w1",
				number: 4,
				title: "Identify Requirements / Dependencies",
				description: "Checklist of accounts, API access, credentials, infrastructure, assets, reference ads, campaign rules, editor input and decisions. Tag each by stage and whether it actually blocks progress.",
				notes: "",
				due: "2026-10-07",
				milestones: [
					ms("List accounts, API access, credentials and infrastructure", "2026-10-04", "Company-owned accounts, billing, paid-generation cap. Confirm Floyo or UGC export or API. Keys, GitHub, storage, render environment."),
					ms("List assets, reference ads, campaign rules and editor input", "2026-10-04", "Lead and second editor. Named brand, policy or release owner. One approved campaign, script and brief. Five to ten test scripts. Three editable reference ads. Brand kit and asset library."),
					ms("Tag each item by stage and whether it is a hard blocker", "2026-10-07", "Do not wait for the full list. Call out provider APIs, private storage, background jobs, rendering, rights, data protection and approvals.")
				]
			},
			{
				id: id(),
				week: "w1",
				number: 5,
				title: "Finalise Development Roadmap",
				description: "Break October into small gated stages with a deliverable and acceptance test each. Prove the narrow end-to-end path first. Measure editor touch time from approved script to an acceptable first cut versus the current manual workflow. Recommend the generation layer under Hyrax: Floyo, self-hosted ComfyUI, or hosted APIs.",
				notes: "The gated build pipeline lives in the development tool. This tracker only holds the generation-layer comparison.",
				due: "2026-10-07",
				milestones: [
					ms("Draft gated October stages with a deliverable and acceptance test each", "2026-10-06", "One active gate at a time: asset quality, then retention and search, then deterministic rendering, then constrained edit selection."),
					ms("Define editor touch-time measurement for the pilot", "2026-10-07", "Approved script to acceptable finished advert versus the current manual workflow."),
					ms("Compare Floyo, self-hosted ComfyUI and hosted API generation", "2026-10-07", "Versioned recipes called by Hyrax. Check headless ComfyUI, queues, workflow versioning, independent GPU workers, local models plus external APIs. Provider-independent.")
				]
			}
		]
	};
}
function loadState() {
	try {
		const raw = localStorage.getItem("hyrax-october-tracker-v3") ?? localStorage.getItem(LEGACY_KEY);
		if (raw) {
			const parsed = withAnswers(JSON.parse(raw));
			return {
				...parsed,
				people: parsed.people ?? []
			};
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
			setState((prev) => {
				if (!prev) return prev;
				const mine = snap.answers.find((row) => row.author === who.name);
				return {
					...prev,
					goals: snap.goals.length > 0 ? snap.goals : prev.goals,
					answers: mine ? mine.body : prev.answers
				};
			});
			if (snap.goals.length === 0 && who.role === "owner") {
				const local = loadState();
				if (local.goals.length > 0) saveGoals({ data: {
					email: who.email,
					goals: local.goals
				} }).catch(() => setToast("Could not save the board."));
			}
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
		const extra = (g.week === "w1" && g.number === 1 ? SOW_SEARCH : "") + (isWeekOneFlow(g) ? FLOW_SEARCH : "");
		const blob = `${g.title} ${g.description} ${g.notes} ${g.milestones.map((m) => `${m.title} ${m.notes}`).join(" ")} ${extra}`.toLowerCase();
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
function GoalCard({ goal, onEdit, onDelete, onAddMs, onEditMs, onStatus, onDue, onDeleteMs, locked, comments, me, onComment, onEditComment, onDeleteComment }) {
	const p = progress(goal);
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
			isWeekOneFlow(goal) && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FlowPanel, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", { children: goal.milestones.map((m) => {
				const sow = isWeekOneSow(goal, m.id, goal.milestones[0]?.id);
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "border-t border-border",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-2 px-4 py-3 sm:grid-cols-[auto_1fr_9.5rem_9rem_auto] sm:items-start",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusMark, { status: m.status }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "min-w-0",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm font-medium",
									children: m.title
								}), m.notes && !sow && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-sm leading-relaxed text-muted",
									children: m.notes
								})]
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
					}), sow && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "border-t border-border bg-bg/40 px-4 py-4",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SowPanel, {})
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
			className: "w-full max-w-lg rounded-xl border border-border bg-surface p-4",
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
							className: "field min-h-20",
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
