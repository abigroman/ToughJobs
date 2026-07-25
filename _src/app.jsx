// app.jsx — Toughjobs homepage app w/ Tweaks
const { useEffect } = React;

// Each palette preset is a coordinated look. The accent-hue picker overrides
// the accent specifically; bgDark/muteHL stay locked to the palette.
const PALETTES = {
  "navy-led":    { accent: "#002768", bgDark: "#001a4a", muteHL: "#9BA3AF" },
  "red-led":     { accent: "#C8262A", bgDark: "#0A0F1C", muteHL: "#9BA3AF" },
  "mono-accent": { accent: "#F5C518", bgDark: "#0A0F1C", muteHL: "#D1D5DB" },
};

const ACCENT_OPTIONS = [
  "#C8262A", // brand red, brightened
  "#A90100", // logo red
  "#002768", // brand navy
  "#0A0F1C", // ink mono
  "#F5C518", // safety yellow
  "#E25822", // hot orange
];

function App() {
  const [t, setTweak] = useTweaks(window.__TWEAK_DEFAULTS__);

  // When the user changes palette via the dropdown, snap accentHue to the
  // preset's accent. They can still override with the color picker afterwards.
  const onPalette = (v) => {
    setTweak({ palette: v, accentHue: PALETTES[v].accent });
  };

  useEffect(() => {
    const body = document.body;
    const pal = PALETTES[t.palette] || PALETTES["navy-led"];
    body.style.setProperty("--accent",        t.accentHue || pal.accent);
    body.style.setProperty("--bg-dark",       pal.bgDark);
    body.style.setProperty("--headline-mute", pal.muteHL);
    body.style.setProperty("--headline-b",    t.accentHue || pal.accent);
    body.dataset.palette   = t.palette;
    body.dataset.headline  = t.headlineStyle;
    body.dataset.density   = t.density;
    body.dataset.chevrons  = String(t.chevrons);
  }, [t.palette, t.headlineStyle, t.density, t.chevrons, t.accentHue]);

  return (
    <React.Fragment>
      <Nav />
      <main>
        <Hero heroStyle={t.heroStyle} />
        <TrustMarquee />
        <Services />
        <Wraps />
        <Statement />
        <ServiceArea cityStyle={t.cityStyle} />
        <Insights />
        <CtaBand />
      </main>
      <Footer />

      <TweaksPanel title="Tweaks">
        <TweakSection label="Direction" />
        <TweakSelect
          label="Palette lead"
          value={t.palette}
          options={[
            { value: "navy-led",    label: "Navy-led (brand inheritance)" },
            { value: "red-led",     label: "Red-led (accent forward)" },
            { value: "mono-accent", label: "Mono + single accent" },
          ]}
          onChange={onPalette}
        />
        <TweakColor
          label="Accent hue"
          value={t.accentHue}
          options={ACCENT_OPTIONS}
          onChange={(v) => setTweak("accentHue", v)}
        />

        <TweakSection label="Type & rhythm" />
        <TweakRadio
          label="Headline"
          value={t.headlineStyle}
          options={[
            { value: "split",    label: "Split" },
            { value: "solid",    label: "Solid" },
            { value: "outlined", label: "Outline" },
          ]}
          onChange={(v) => setTweak("headlineStyle", v)}
        />
        <TweakRadio
          label="Density"
          value={t.density}
          options={[
            { value: "spacious", label: "Spacious" },
            { value: "compact",  label: "Compact" },
          ]}
          onChange={(v) => setTweak("density", v)}
        />

        <TweakSection label="Hero & geometry" />
        <TweakRadio
          label="Hero"
          value={t.heroStyle}
          options={[
            { value: "photo-fullbleed",       label: "Photo" },
            { value: "geometric-typographic", label: "Type" },
          ]}
          onChange={(v) => setTweak("heroStyle", v)}
        />
        <TweakToggle
          label="Chevron section cuts"
          value={t.chevrons}
          onChange={(v) => setTweak("chevrons", v)}
        />

        <TweakSection label="Service area tiles" />
        <TweakSelect
          label="Style"
          value={t.cityStyle}
          options={[
            { value: "sweep", label: "Sweep — red panel slides in" },
            { value: "stamp", label: "Stamp — industrial nameplate" },
            { value: "pin",   label: "Pin — map marker + distance" },
            { value: "slash", label: "Slash — diagonal red wedge" },
          ]}
          onChange={(v) => setTweak("cityStyle", v)}
        />
      </TweaksPanel>
    </React.Fragment>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
