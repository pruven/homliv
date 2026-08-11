import ArcRevealHero from "@/components/ruixen/arc-reveal-hero";

export default function Home() {
  return (
    <ArcRevealHero
      greetings={[
        { text: "Hello", lang: "en" },
        { text: "你好", lang: "zh" },
        { text: "Bonjour", lang: "fr" },
        { text: "やあ", lang: "ja" },
        { text: "ਸਤਿ ਸ੍ਰੀ ਅਕਾਲ ਜੀ", lang: "pa" },
      ]}
      storageKey="homliv-welcome"
    >
      <div className="relative flex min-h-svh flex-col items-center justify-center gap-8 px-6 text-center">
        <p className="text-sm font-medium uppercase tracking-[0.3em] text-muted-foreground">
          Welcome to
        </p>

        <h1 className="text-6xl font-semibold tracking-tight sm:text-7xl md:text-8xl">
          Homliv
        </h1>

        <p className="max-w-xl text-lg font-normal leading-relaxed text-muted-foreground sm:text-xl">
          Quiet, sharp, and considered — tools crafted to make a house feel
          like home.
        </p>

        <div className="flex flex-col gap-3 pt-4 sm:flex-row">
          <a
            href="#"
            className="inline-flex h-12 items-center justify-center rounded-full bg-foreground px-7 text-base font-medium text-background transition-colors hover:opacity-80"
          >
            Get started
          </a>
          <a
            href="#"
            className="inline-flex h-12 items-center justify-center rounded-full border border-border px-7 text-base font-medium transition-colors hover:bg-muted"
          >
            Learn more
          </a>
        </div>
      </div>
    </ArcRevealHero>
  );
}
