import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/admin")({
  ssr: false,
  head: () => ({
    meta: [
      { title: "Painel Administrativo — Abrigo Amigo Bicho" },
      {
        name: "description",
        content:
          "Proposta de plataforma de gestão do Abrigo Amigo Bicho: animais, adoções, eventos, números e fotos do site.",
      },
      { name: "robots", content: "noindex" },
      { property: "og:title", content: "Painel Administrativo — Abrigo Amigo Bicho" },
      {
        property: "og:description",
        content: "Gerencie animais, adoções, eventos, números e a galeria do site.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: AdminPage,
});

/* ---------------- Modelo de dados (protótipo, salvo no navegador) ---------------- */

const DEMO_USER = "maria";
const DEMO_PASS = "amigobicho";
const STORAGE_KEY = "aab-admin-demo-v1";

type AdminAnimal = {
  id: string;
  name: string;
  species: "dog" | "cat";
  age: string;
  gender: string;
  size: string;
  shortDescription: string;
  image: string;
  available: boolean;
};

type AdminEvent = {
  id: string;
  title: string;
  date: string;
  place: string;
  description: string;
  adopted: number;
};

type GalleryPhoto = { id: string; caption: string; url: string };

type AdminState = {
  shelterCount: number;
  adoptionsLog: { id: string; animal: string; date: string }[];
  stats: { value: string; label: string }[];
  events: AdminEvent[];
  animals: AdminAnimal[];
  gallery: GalleryPhoto[];
};

function initialState(): AdminState {
  const animals: AdminAnimal[] = SITE.adoptions.animals.map((a) => ({
    id: a.id,
    name: a.name,
    species: a.species,
    age: a.age,
    gender: a.gender,
    size: a.size,
    shortDescription: a.shortDescription,
    image: a.image,
    available: a.available,
  }));

  return {
    shelterCount: animals.filter((a) => a.available).length || 42,
    adoptionsLog: [],
    stats: SITE.proof.stats.map((s) => ({ value: s.value, label: s.label })),
    events: [
      {
        id: "feirinha-agroutil",
        title: "Feirinha de Adoção — Agroútil",
        date: "2026-07-12",
        place: "Agroútil, Olinda",
        description:
          "Feirinha com 18 cães disponíveis, apoio de voluntários e arrecadação de ração.",
        adopted: 5,
      },
    ],
    animals,
    gallery: [
      { id: "g1", caption: "Cães encontrando um novo lar", url: "/src/assets/g1.jpeg" },
      { id: "g2", caption: "Feirinha de adoção", url: "/src/assets/g2.jpeg" },
      { id: "g3", caption: "Equipe do Abrigo Amigo Bicho", url: "/src/assets/g3.jpeg" },
      { id: "g4", caption: "Voluntários do abrigo em uma feirinha", url: "/src/assets/g4.jpeg" },
      { id: "g5", caption: "Feirinha em frente à Agroútil", url: "/src/assets/g5.jpeg" },
      { id: "g6", caption: "Alessandra Pinheiro com Teca", url: "/src/assets/g6.jpeg" },
    ],
  };
}

function useAdminState() {
  const [state, setState] = useState<AdminState>(initialState);

  useEffect(() => {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (raw) {
      try {
        setState({ ...initialState(), ...(JSON.parse(raw) as AdminState) });
      } catch {
        /* ignora dados inválidos */
      }
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }, [state]);

  return [state, setState] as const;
}

/* ---------------- UI base ---------------- */

const inputClass =
  "w-full rounded-xl border border-border bg-card px-4 py-2.5 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-ring/30 transition";
const btnPrimary =
  "inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-elegant hover:-translate-y-0.5 transition-all";
const btnGhost =
  "inline-flex items-center justify-center gap-2 rounded-2xl border border-border bg-card px-4 py-2 text-sm font-semibold text-foreground hover:bg-accent transition";

function Card({
  title,
  description,
  children,
}: {
  title: string;
  description?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="glass rounded-3xl p-6 lg:p-8">
      <h2 className="text-xl font-extrabold tracking-tight">{title}</h2>
      {description && <p className="mt-1 text-sm text-muted-foreground">{description}</p>}
      <div className="mt-6">{children}</div>
    </section>
  );
}

/* ---------------- Login ---------------- */

function Login({ onSuccess }: { onSuccess: () => void }) {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState(false);

  return (
    <main className="min-h-screen bg-gradient-soft flex items-center justify-center px-4">
      <div className="w-full max-w-md glass-strong rounded-3xl p-8 shadow-elegant">
        <span className="text-xs font-bold uppercase tracking-widest text-primary">
          Área restrita
        </span>
        <h1 className="mt-2 text-3xl font-extrabold tracking-tight">Painel do Abrigo</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Acesso exclusivo da equipe do {SITE.brand}.
        </p>

        <form
          className="mt-8 space-y-4"
          onSubmit={(e) => {
            e.preventDefault();
            if (user.trim().toLowerCase() === DEMO_USER && pass === DEMO_PASS) onSuccess();
            else setError(true);
          }}
        >
          <div>
            <label className="text-sm font-semibold" htmlFor="user">
              Usuário
            </label>
            <input
              id="user"
              className={`mt-1.5 ${inputClass}`}
              value={user}
              onChange={(e) => setUser(e.target.value)}
              autoComplete="username"
            />
          </div>
          <div>
            <label className="text-sm font-semibold" htmlFor="pass">
              Senha
            </label>
            <input
              id="pass"
              type="password"
              className={`mt-1.5 ${inputClass}`}
              value={pass}
              onChange={(e) => setPass(e.target.value)}
              autoComplete="current-password"
            />
          </div>
          {error && <p className="text-sm font-semibold text-destructive">Usuário ou senha inválidos.</p>}
          <button type="submit" className={`${btnPrimary} w-full`}>
            Entrar
          </button>
        </form>

        <p className="mt-6 rounded-2xl bg-accent px-4 py-3 text-xs text-accent-foreground">
          Protótipo de demonstração — acesso: <strong>{DEMO_USER}</strong> / <strong>{DEMO_PASS}</strong>
        </p>
      </div>
    </main>
  );
}

/* ---------------- Página ---------------- */

type Tab = "resumo" | "animais" | "eventos" | "numeros" | "galeria";

const TABS: { id: Tab; label: string; icon: string }[] = [
  { id: "resumo", label: "Resumo", icon: "fi fi-sr-dashboard" },
  { id: "animais", label: "Animais", icon: "fi fi-sr-dog" },
  { id: "eventos", label: "Eventos", icon: "fi fi-sr-calendar" },
  { id: "numeros", label: "Números", icon: "fi fi-sr-chart-histogram" },
  { id: "galeria", label: "Galeria", icon: "fi fi-sr-picture" },
];

function AdminPage() {
  const [logged, setLogged] = useState(false);
  const [tab, setTab] = useState<Tab>("resumo");
  const [state, setState] = useAdminState();

  if (!logged) return <Login onSuccess={() => setLogged(true)} />;

  return (
    <div className="min-h-screen bg-gradient-soft">
      <header className="sticky top-0 z-30 glass-strong">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-4 py-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-primary">
              Painel administrativo
            </span>
            <h1 className="text-2xl font-extrabold tracking-tight">Olá Maria Eduarda!</h1>
          </div>
          <button className={btnGhost} onClick={() => setLogged(false)}>
            Sair
          </button>
        </div>
        <nav className="mx-auto max-w-7xl overflow-x-auto px-4 pb-3">
          <div className="flex gap-2">
            {TABS.map((t) => (
              <button
                key={t.id}
                onClick={() => setTab(t.id)}
                className={`inline-flex shrink-0 items-center gap-2 rounded-2xl px-4 py-2 text-sm font-semibold transition ${
                  tab === t.id
                    ? "bg-gradient-primary text-primary-foreground shadow-glass"
                    : "border border-border bg-card text-muted-foreground hover:bg-accent"
                }`}
              >
                <i className={t.icon} aria-hidden="true" />
                {t.label}
              </button>
            ))}
          </div>
        </nav>
      </header>

      <main className="mx-auto max-w-7xl space-y-8 px-4 py-10">
        {tab === "resumo" && <Resumo state={state} setState={setState} />}
        {tab === "animais" && <Animais state={state} setState={setState} />}
        {tab === "eventos" && <Eventos state={state} setState={setState} />}
        {tab === "numeros" && <Numeros state={state} setState={setState} />}
        {tab === "galeria" && <Galeria state={state} setState={setState} />}

        <p className="text-center text-xs text-muted-foreground">
          Protótipo de proposta — as alterações ficam salvas apenas neste navegador.
        </p>
      </main>
    </div>
  );
}

type Props = {
  state: AdminState;
  setState: React.Dispatch<React.SetStateAction<AdminState>>;
};

/* ---------------- Resumo + registrar adoção ---------------- */

function Resumo({ state, setState }: Props) {
  const [animalName, setAnimalName] = useState("");
  const availableNames = state.animals.filter((a) => a.available).map((a) => a.name);

  function registrarAdocao() {
    const nome = animalName.trim() || availableNames[0] || "Animal";
    setState((s) => ({
      ...s,
      shelterCount: Math.max(0, s.shelterCount - 1),
      animals: s.animals.map((a) => (a.name === nome ? { ...a, available: false } : a)),
      adoptionsLog: [
        { id: crypto.randomUUID(), animal: nome, date: new Date().toLocaleDateString("pt-BR") },
        ...s.adoptionsLog,
      ].slice(0, 12),
    }));
    setAnimalName("");
  }

  const adotadosEventos = state.events.reduce((sum, e) => sum + e.adopted, 0);

  return (
    <>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {[
          { value: state.shelterCount, label: "Animais no abrigo" },
          { value: state.adoptionsLog.length, label: "Adoções registradas aqui" },
          { value: adotadosEventos, label: "Adotados em eventos" },
          { value: state.events.length, label: "Eventos cadastrados" },
        ].map((c) => (
          <div key={c.label} className="glass rounded-3xl p-6">
            <p className="text-4xl font-extrabold tracking-tight text-gradient">{c.value}</p>
            <p className="mt-2 text-sm font-semibold text-muted-foreground">{c.label}</p>
          </div>
        ))}
      </div>

      <div className="mt-8 grid gap-8 lg:grid-cols-2">
        <Card
          title="Registrar uma adoção"
          description="Ao registrar, o número de animais no abrigo diminui automaticamente."
        >
          <div className="space-y-4">
            <div>
              <label className="text-sm font-semibold" htmlFor="adoptado">
                Animal adotado
              </label>
              <input
                id="adoptado"
                list="animais-disponiveis"
                placeholder={availableNames[0] ?? "Nome do animal"}
                className={`mt-1.5 ${inputClass}`}
                value={animalName}
                onChange={(e) => setAnimalName(e.target.value)}
              />
              <datalist id="animais-disponiveis">
                {availableNames.map((n) => (
                  <option key={n} value={n} />
                ))}
              </datalist>
            </div>
            <button className={btnPrimary} onClick={registrarAdocao}>
              <i className="fi fi-sr-heart" aria-hidden="true" /> Registrar adoção
            </button>
          </div>
        </Card>

        <Card title="Últimas adoções" description="Histórico recente do painel.">
          {state.adoptionsLog.length === 0 ? (
            <p className="text-sm text-muted-foreground">Nenhuma adoção registrada ainda.</p>
          ) : (
            <ul className="divide-y divide-border">
              {state.adoptionsLog.map((a) => (
                <li key={a.id} className="flex items-center justify-between py-2.5 text-sm">
                  <span className="font-semibold">{a.animal}</span>
                  <span className="text-muted-foreground">{a.date}</span>
                </li>
              ))}
            </ul>
          )}
        </Card>
      </div>
    </>
  );
}

/* ---------------- Animais ---------------- */

const emptyAnimal = (): AdminAnimal => ({
  id: "",
  name: "",
  species: "dog",
  age: "",
  gender: "Macho",
  size: "Médio",
  shortDescription: "",
  image: "",
  available: true,
});

function Animais({ state, setState }: Props) {
  const [form, setForm] = useState<AdminAnimal>(emptyAnimal);

  function salvar(e: React.FormEvent) {
    e.preventDefault();
    if (!form.name.trim()) return;
    const id = form.id || form.name.trim().toLowerCase().replace(/\s+/g, "-");
    setState((s) => {
      const exists = s.animals.some((a) => a.id === id);
      return {
        ...s,
        shelterCount: exists ? s.shelterCount : s.shelterCount + 1,
        animals: exists
          ? s.animals.map((a) => (a.id === id ? { ...form, id } : a))
          : [{ ...form, id }, ...s.animals],
      };
    });
    setForm(emptyAnimal());
  }

  return (
    <div className="grid gap-8 lg:grid-cols-[400px_1fr]">
      <Card
        title={form.id ? "Editar animal" : "Cadastrar novo animal"}
        description="Preenchimento rápido: nome, espécie, idade e foto."
      >
        <form className="space-y-4" onSubmit={salvar}>
          <input
            className={inputClass}
            placeholder="Nome"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
          <div className="grid grid-cols-2 gap-3">
            <select
              className={inputClass}
              value={form.species}
              onChange={(e) => setForm({ ...form, species: e.target.value as "dog" | "cat" })}
            >
              <option value="dog">Cachorro</option>
              <option value="cat">Gato</option>
            </select>
            <select
              className={inputClass}
              value={form.gender}
              onChange={(e) => setForm({ ...form, gender: e.target.value })}
            >
              <option>Macho</option>
              <option>Fêmea</option>
            </select>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <input
              className={inputClass}
              placeholder="Idade (ex: 2 anos)"
              value={form.age}
              onChange={(e) => setForm({ ...form, age: e.target.value })}
            />
            <input
              className={inputClass}
              placeholder="Porte"
              value={form.size}
              onChange={(e) => setForm({ ...form, size: e.target.value })}
            />
          </div>
          <textarea
            className={`${inputClass} min-h-24`}
            placeholder="Descrição curta / história"
            value={form.shortDescription}
            onChange={(e) => setForm({ ...form, shortDescription: e.target.value })}
          />
          <input
            className={inputClass}
            placeholder="URL da foto"
            value={form.image}
            onChange={(e) => setForm({ ...form, image: e.target.value })}
          />
          <label className="flex items-center gap-2 text-sm font-semibold">
            <input
              type="checkbox"
              checked={form.available}
              onChange={(e) => setForm({ ...form, available: e.target.checked })}
            />
            Disponível para adoção
          </label>
          <div className="flex gap-3">
            <button type="submit" className={btnPrimary}>
              {form.id ? "Salvar alterações" : "Adicionar ao catálogo"}
            </button>
            {form.id && (
              <button type="button" className={btnGhost} onClick={() => setForm(emptyAnimal())}>
                Cancelar
              </button>
            )}
          </div>
        </form>
      </Card>

      <Card
        title={`Catálogo de animais (${state.animals.length})`}
        description="Clique em editar para atualizar as informações exibidas no site."
      >
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {state.animals.map((a) => (
            <article key={a.id} className="rounded-3xl border border-border bg-card overflow-hidden">
              <div className="aspect-video overflow-hidden bg-muted">
                {a.image && (
                  <img src={a.image} alt={a.name} className="h-full w-full object-cover" />
                )}
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between gap-2">
                  <h3 className="font-bold tracking-tight">{a.name}</h3>
                  <span
                    className={`rounded-full px-2 py-0.5 text-[11px] font-bold ${
                      a.available
                        ? "bg-accent text-accent-foreground"
                        : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {a.available ? "Disponível" : "Adotado"}
                  </span>
                </div>
                <p className="mt-1 text-xs text-muted-foreground">
                  {a.species === "dog" ? "Cachorro" : "Gato"} · {a.age} · {a.gender}
                </p>
                <div className="mt-3 flex gap-2">
                  <button className={btnGhost} onClick={() => setForm(a)}>
                    Editar
                  </button>
                  <button
                    className={btnGhost}
                    onClick={() =>
                      setState((s) => ({
                        ...s,
                        animals: s.animals.filter((x) => x.id !== a.id),
                        shelterCount: a.available
                          ? Math.max(0, s.shelterCount - 1)
                          : s.shelterCount,
                      }))
                    }
                  >
                    Remover
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Card>
    </div>
  );
}

/* ---------------- Eventos ---------------- */

function Eventos({ state, setState }: Props) {
  const [form, setForm] = useState({
    title: "",
    date: "",
    place: "",
    description: "",
    adopted: 0,
  });

  return (
    <div className="grid gap-8 lg:grid-cols-[400px_1fr]">
      <Card title="Adicionar evento" description="Detalhe o evento e quantos animais foram adotados.">
        <form
          className="space-y-4"
          onSubmit={(e) => {
            e.preventDefault();
            if (!form.title.trim()) return;
            setState((s) => ({
              ...s,
              events: [{ id: crypto.randomUUID(), ...form }, ...s.events],
            }));
            setForm({ title: "", date: "", place: "", description: "", adopted: 0 });
          }}
        >
          <input
            className={inputClass}
            placeholder="Nome do evento"
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
          />
          <div className="grid grid-cols-2 gap-3">
            <input
              type="date"
              className={inputClass}
              value={form.date}
              onChange={(e) => setForm({ ...form, date: e.target.value })}
            />
            <input
              type="number"
              min={0}
              className={inputClass}
              placeholder="Adotados"
              value={form.adopted}
              onChange={(e) => setForm({ ...form, adopted: Number(e.target.value) })}
            />
          </div>
          <input
            className={inputClass}
            placeholder="Local"
            value={form.place}
            onChange={(e) => setForm({ ...form, place: e.target.value })}
          />
          <textarea
            className={`${inputClass} min-h-28`}
            placeholder="Descrição do evento"
            value={form.description}
            onChange={(e) => setForm({ ...form, description: e.target.value })}
          />
          <button type="submit" className={btnPrimary}>
            Publicar evento
          </button>
        </form>
      </Card>

      <Card title={`Eventos (${state.events.length})`}>
        <div className="space-y-4">
          {state.events.map((ev) => (
            <article key={ev.id} className="rounded-3xl border border-border bg-card p-5">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <h3 className="text-lg font-bold tracking-tight">{ev.title}</h3>
                  <p className="text-xs text-muted-foreground">
                    {ev.date ? new Date(ev.date).toLocaleDateString("pt-BR") : "Sem data"}
                    {ev.place ? ` · ${ev.place}` : ""}
                  </p>
                </div>
                <span className="rounded-full bg-accent px-3 py-1 text-xs font-bold text-accent-foreground">
                  {ev.adopted} adotados
                </span>
              </div>
              {ev.description && <p className="mt-3 text-sm text-muted-foreground">{ev.description}</p>}
              <button
                className={`${btnGhost} mt-4`}
                onClick={() =>
                  setState((s) => ({ ...s, events: s.events.filter((x) => x.id !== ev.id) }))
                }
              >
                Remover
              </button>
            </article>
          ))}
        </div>
      </Card>
    </div>
  );
}

/* ---------------- Números ---------------- */

function Numeros({ state, setState }: Props) {
  return (
    <div className="grid gap-8 lg:grid-cols-2">
      <Card title="Animais no abrigo" description="Número exibido no painel e usado nas adoções.">
        <div className="flex items-center gap-4">
          <button
            className={btnGhost}
            onClick={() => setState((s) => ({ ...s, shelterCount: Math.max(0, s.shelterCount - 1) }))}
          >
            −
          </button>
          <input
            type="number"
            min={0}
            className={`${inputClass} max-w-32 text-center text-lg font-bold`}
            value={state.shelterCount}
            onChange={(e) =>
              setState((s) => ({ ...s, shelterCount: Math.max(0, Number(e.target.value)) }))
            }
          />
          <button
            className={btnGhost}
            onClick={() => setState((s) => ({ ...s, shelterCount: s.shelterCount + 1 }))}
          >
            +
          </button>
        </div>
      </Card>

      <Card title="Indicadores do site" description="Os números da seção “Impacto que Inspira”.">
        <div className="space-y-3">
          {state.stats.map((st, i) => (
            <div key={st.label} className="grid grid-cols-[110px_1fr] gap-3">
              <input
                className={inputClass}
                value={st.value}
                onChange={(e) =>
                  setState((s) => ({
                    ...s,
                    stats: s.stats.map((x, j) => (j === i ? { ...x, value: e.target.value } : x)),
                  }))
                }
              />
              <input
                className={inputClass}
                value={st.label}
                onChange={(e) =>
                  setState((s) => ({
                    ...s,
                    stats: s.stats.map((x, j) => (j === i ? { ...x, label: e.target.value } : x)),
                  }))
                }
              />
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}

/* ---------------- Galeria ---------------- */

function Galeria({ state, setState }: Props) {
  return (
    <Card
      title="Momentos de Pura Felicidade"
      description="Troque as fotos e legendas exibidas na aba de resultados do site."
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {state.gallery.map((photo) => (
          <div key={photo.id} className="rounded-3xl border border-border bg-card overflow-hidden">
            <div className="aspect-video overflow-hidden bg-muted">
              <img src={photo.url} alt={photo.caption} className="h-full w-full object-cover" />
            </div>
            <div className="space-y-3 p-4">
              <input
                className={inputClass}
                value={photo.caption}
                placeholder="Legenda"
                onChange={(e) =>
                  setState((s) => ({
                    ...s,
                    gallery: s.gallery.map((p) =>
                      p.id === photo.id ? { ...p, caption: e.target.value } : p,
                    ),
                  }))
                }
              />
              <input
                className={inputClass}
                value={photo.url}
                placeholder="URL da nova foto"
                onChange={(e) =>
                  setState((s) => ({
                    ...s,
                    gallery: s.gallery.map((p) =>
                      p.id === photo.id ? { ...p, url: e.target.value } : p,
                    ),
                  }))
                }
              />
              <label className="flex cursor-pointer items-center gap-2 text-sm font-semibold text-primary">
                <i className="fi fi-sr-cloud-upload" aria-hidden="true" />
                Enviar do computador
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (!file) return;
                    const url = URL.createObjectURL(file);
                    setState((s) => ({
                      ...s,
                      gallery: s.gallery.map((p) => (p.id === photo.id ? { ...p, url } : p)),
                    }));
                  }}
                />
              </label>
            </div>
          </div>
        ))}
      </div>
      <button
        className={`${btnPrimary} mt-6`}
        onClick={() =>
          setState((s) => ({
            ...s,
            gallery: [...s.gallery, { id: crypto.randomUUID(), caption: "Nova foto", url: "" }],
          }))
        }
      >
        Adicionar foto
      </button>
    </Card>
  );
}
