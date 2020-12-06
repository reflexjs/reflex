module.exports = {
  colors: {
    text: "#191924",
    textLighter: "#777",
    background: "#fff",
    heading: "#07070a",
    primary: "#06f",
    primaryHover: "#005ae0",
    secondary: "#07070a",
    secondaryHover: "#191924",
    accent: "#fb3640",
    accentHover: "#fa0f1b",
    selection: "#ff70a0",
    muted: "#fafafa",
    mutedHover: "#f1f1f1",
    border: "#ebece9",
    borderHover: "#b9bdb3",
    prism: {
      text: "#d6deeb",
      lineNumber: "#88a0d6",
      background: "#031528",
      comment: "#93b4b4",
      string: "#addb67",
      var: "#d6deeb",
      number: "#f78c6c",
      constant: "#82aaff",
      punctuation: "#c792ea",
      className: "#ffcb8b",
      tag: "#7fdbca",
      boolean: "#ff5874",
      property: "#80cbc4",
      namespace: "#b2ccd6",
      highlight: "#243E73",
      file: "#92B5B2",
    },
    modes: {
      dark: {
        text: "#ededee",
        background: "#1a202c",
        heading: "#fff",
        primary: "#06f",
        primaryHover: "#FF3355",
        secondary: "#07070a",
        secondaryHover: "#191924",
        accent: "#fb3640",
        accentHover: "#fa0f1b",
        muted: "#2a2a3c",
        mutedHover: "#212130",
        border: "#2a2a3c",
        borderHover: "#434360",
      },
    },
  },
  breakpoints: ["640px", "768px", "1024px", "1280px"],
  fonts: {
    body: "Inter, sans-serif",
    heading: "Inherit",
    monospace:
      "SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
  },
  fontSizes: {
    xs: "0.75rem",
    sm: "0.875rem",
    md: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    "2xl": "1.5rem",
    "3xl": "1.875rem",
    "4xl": "2.25rem",
    "5xl": "3rem",
    "6xl": "4rem",
  },
  fontWeights: {
    hairline: "100",
    thin: "200",
    light: "300",
    normal: "400",
    medium: "500",
    semibold: "600",
    bold: "700",
    extrabold: "800",
    black: "900",
  },
  letterSpacings: {
    tighter: "-0.05em",
    tight: "-0.025em",
    normal: "0",
    wide: "0.025em",
    wider: "0.05em",
    widest: "0.1em",
  },
  lineHeights: {
    none: "1",
    tight: "1.25",
    snug: "1.375",
    normal: "1.5",
    relaxed: "1.625",
    loose: "2",
    3: ".75rem",
    4: "1rem",
    5: "1.25rem",
    6: "1.5rem",
    7: "1.75rem",
    8: "2rem",
    9: "2.25rem",
    10: "2.5rem",
  },
  space: {
    0: "0",
    1: "0.25rem",
    2: "0.5rem",
    3: "0.75rem",
    4: "1rem",
    5: "1.25rem",
    6: "1.5rem",
    7: "1.75rem",
    8: "2rem",
    9: "2.25rem",
    10: "2.5rem",
    12: "3rem",
    14: "3.5rem",
    16: "4rem",
    18: "4.5rem",
    20: "5rem",
    22: "5.5rem",
    24: "6rem",
    26: "6.5rem",
    28: "7rem",
    30: "7.5rem",
    32: "8rem",
    36: "9rem",
    40: "10rem",
    48: "12rem",
    56: "14rem",
    64: "16rem",
    72: "18rem",
    80: "20rem",
  },
  sizes: {
    0: "0",
    1: "0.25rem",
    2: "0.5rem",
    3: "0.75rem",
    4: "1rem",
    5: "1.25rem",
    6: "1.5rem",
    7: "1.75rem",
    8: "2rem",
    9: "2.25rem",
    10: "2.5rem",
    12: "3rem",
    14: "3.5rem",
    16: "4rem",
    18: "4.5rem",
    20: "5rem",
    22: "5.5rem",
    24: "6rem",
    26: "6.5rem",
    28: "7rem",
    30: "7.5rem",
    32: "8rem",
    36: "9rem",
    40: "10rem",
    48: "12rem",
    56: "14rem",
    64: "16rem",
    72: "18rem",
    80: "20rem",
    auto: "auto",
    half: "50%",
    full: "100%",
    screen: "100vw",
  },
  borders: [
    0,
    "1px solid",
    "2px solid",
    "3px solid",
    "4px solid",
    "5px solid",
    "6px solid",
    "7px solid",
    "8px solid",
    "9px solid",
    "10px solid",
  ],
  radii: {
    none: "0",
    sm: "0.125rem",
    md: "0.25rem",
    lg: "0.375rem",
    xl: "0.5rem",
    "2xl": "1rem",
    "3xl": "1.5rem",
    "4xl": "2rem",
    full: "9999px",
  },
  shadows: {
    none: "none",
    xs: "0 0 0 1px rgba(0, 0, 0, 0.05)",
    sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
    md: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
    lg: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
    xl:
      "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
    "2xl":
      "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
    "3xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
    inner: "inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)",
    outline: "0 0 0 3px rgba(66, 153, 225, 0.5)",
  },
  gridTemplateColumns: {
    none: "none",
    1: "repeat(1, minmax(0, 1fr))",
    2: "repeat(2, minmax(0, 1fr))",
    3: "repeat(3, minmax(0, 1fr))",
    4: "repeat(4, minmax(0, 1fr))",
    5: "repeat(5, minmax(0, 1fr))",
    6: "repeat(6, minmax(0, 1fr))",
    7: "repeat(7, minmax(0, 1fr))",
    8: "repeat(8, minmax(0, 1fr))",
    9: "repeat(9, minmax(0, 1fr))",
    10: "repeat(10, minmax(0, 1fr))",
    11: "repeat(11, minmax(0, 1fr))",
    12: "repeat(12, minmax(0, 1fr))",
  },
  gridTemplateRows: {
    none: "none",
    1: "repeat(1, minmax(0, 1fr))",
    2: "repeat(2, minmax(0, 1fr))",
    3: "repeat(3, minmax(0, 1fr))",
    4: "repeat(4, minmax(0, 1fr))",
    5: "repeat(5, minmax(0, 1fr))",
    6: "repeat(6, minmax(0, 1fr))",
  },
  styles: {
    // Global styles.
    global: {
      "*": {
        m: 0,
        p: 0,
        listStyle: "none",
        border: "0 solid",
        borderColor: "border",

        "::selection": {
          bg: "selection",
        },
      },
      a: {
        color: "inherit",
        textDecoration: "inherit",
      },
      button: {
        bg: "transparent",
        backgroundImage: "none",
      },
      "img, video": {
        maxWidth: "100%",
        height: "auto",
      },
      hr: {
        borderTopWidth: 1,
      },
      "pre, code, kbd, samp": {
        fontFamily: "monospace",
      },
    },
    root: {
      color: "text",
      fontFamily: "body",
      fontWeight: "normal",
      fontSize: "md",
      lineHeight: "relaxed",
      letterSpacing: "normal",
    },
    pre: {
      variant: "text.pre",
    },
    code: {
      variant: "text.code",
    },
    inlineCode: {
      variant: "text.pre",
      color: "primary",
    },
  },
  text: {
    lead: {
      fontSize: "xl",
    },
    code: {
      fontFamily: "monospace",
    },
    pre: {
      color: "prism.text",
      backgroundColor: "prism.background",
      fontFamily: "monospace",
      fontSize: "sm",
      lineHeight: 7,
      tabSize: 2,
      hyphens: "none",
      my: 8,
      py: 4,
      overflow: "auto",
      borderRadius: "md",
      whiteSpace: "pre-wrap",
      ".plain": {
        minHeight: "1ch",
        display: "inline-block",
      },
      ".attr-name": {
        fontStyle: "italic",
      },
      ".comment": {
        color: "prism.comment",
      },
      ".attr-name, .string, .url": {
        color: "prism.string",
      },
      ".variable": {
        color: "prism.var",
      },
      ".number": {
        color: "prism.number",
      },
      ".builtin, .char, .constant, .function": {
        color: "prism.constant",
      },
      ".punctuation, .selector, .doctype": {
        color: "prism.punctuation",
      },
      ".class-name": {
        color: "prism.className",
      },
      ".operator, .keyword": {
        color: "prism.tag",
      },
      ".boolean": {
        color: "prism.boolean",
      },
      ".property": {
        color: "prism.property",
      },
      ".namespace": {
        color: "prism.namespace",
      },
      ".highlight": {
        bg: "prism.highlight",
      },
    },
  },

  heading: {
    color: "heading",
    fontFamily: "heading",
    fontWeight: "semibold",
    lineHeight: "tight",
    letterSpacing: "tight",

    a: {
      color: "text",

      ":hover": {
        color: "primary",
      },
    },
    h1: {
      fontSize: ["4xl", "5xl", "6xl"],
    },
    h2: {
      fontSize: ["3xl", "4xl", "5xl"],
    },
    h3: {
      fontSize: ["2xl", "3xl", "4xl"],
    },
    h4: {
      fontSize: ["xl", "2xl", "3xl"],
    },
    h5: {
      fontSize: ["lg", "xl", "2xl"],
    },
    h6: {
      fontSize: ["md", "lg", "xl"],
    },
  },

  container: {
    px: [4, 6, 6, 4],
    mx: "auto",
    maxWidth: 1280,

    sm: {
      maxWidth: 640,
    },

    md: {
      maxWidth: 768,
    },

    lg: {
      maxWidth: 1024,
    },

    xl: {
      maxWidth: 1280,
    },
  },

  button: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    color: "text",
    bg: "muted",
    fontFamily: "body",
    fontSize: ["sm", "md", "lg"],
    lineHeight: "none",
    textDecoration: "none",
    border: "1px solid",
    borderColor: "border",
    borderRadius: "md",
    px: 4,
    py: 3,
    cursor: "pointer",
    transition: "all .15s ease-in",

    sm: {
      px: 3,
      py: 2,
      fontSize: ["xs", "sm", "md"],
    },

    lg: {
      px: 5,
      py: 4,
      fontSize: ["md", "lg", "xl"],
    },

    primary: {
      bg: "primary",
      color: "white",
      borderColor: "primary",

      "&:hover, &:focus": {
        bg: "primaryHover",
        color: "white",
        borderColor: "primaryHover",
      },
    },

    outlinePrimary: {
      bg: "transparent",
      color: "primary",
      borderColor: "primary",

      "&:hover, &:focus": {
        bg: "primaryHover",
        color: "white",
        borderColor: "primaryHover",
      },
    },

    secondary: {
      bg: "secondary",
      color: "white",
      borderColor: "secondary",

      "&:hover, &:focus": {
        bg: "secondaryHover",
        color: "white",
        borderColor: "secondaryHover",
      },
    },

    outlineSecondary: {
      bg: "transparent",
      color: "secondary",
      borderColor: "secondary",

      "&:hover, &:focus": {
        bg: "secondaryHover",
        color: "white",
        borderColor: "secondaryHover",
      },
    },

    accent: {
      bg: "accent",
      color: "text",
      borderColor: "accent",

      "&:hover, &:focus": {
        bg: "accentHover",
        color: "text",
        borderColor: "accentHover",
      },
    },

    outlineAccent: {
      bg: "transparent",
      color: "accent",
      borderColor: "accent",

      "&:hover, &:focus": {
        bg: "accentHover",
        color: "white",
        borderColor: "accentHover",
      },
    },

    link: {
      bg: "transparent",
      color: "text",
      borderColor: "transparent",

      "&:hover, &:focus": {
        bg: "muted",
        color: "text",
        borderColor: "transparent",
      },
    },

    icon: {
      bg: "transparent",
      borderColor: "transparent",
      p: 0,
    },
  },

  input: {
    bg: "background",
    color: "text",
    fontFamily: "body",
    fontSize: ["sm", "md", "lg"],
    lineHeight: "none",
    border: "1px solid",
    borderColor: "border",
    borderRadius: "md",
    px: 4,
    py: 3,
    width: "100%",

    "&:focus": {
      borderColor: "primary",
      outline: "none",
    },

    "&[type=checkbox], &[type=radio]": {
      display: "none",

      "+ label": {
        display: "inline-flex",
        alignItems: "center",
        position: "relative",
        cursor: "pointer",

        "&:before": {
          content: "''",
          width: "14px",
          height: "14px",
          flex: "none",
          bg: "background",
          borderRadius: "sm",
          mr: 3,
          border: "2px solid",
          borderColor: "background",
          boxShadow: ({ colors }) => `0 0 0 1px ${colors.border}`,
        },
      },
    },

    "&:checked + label:before": {
      bg: "primary",
      boxShadow: ({ colors }) => `0 0 0 2px ${colors.primary}`,
    },

    "&[type=radio]": {
      "+ label": {
        "&:before": {
          borderRadius: "full",
        },
      },
    },

    sm: {
      py: 2,
      fontSize: ["xs", "sm", "md"],
    },

    lg: {
      py: 4,
      fontSize: ["md", "lg", "xl"],
    },
  },
}
