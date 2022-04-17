module.exports = {
  content: ['./tailwind/*.html'],
  screens:{
    sm:"480px",
    md:"768",
    lg:"976",
    xl:"1440px"
  },
  theme: {
    extend: {
      color:{
        dark: 'dark',
        get:'rgb(179, 22, 11)',
        brighred:'hsl(12,88%,59%)'
      }
    },
  },
  plugins: [],
}
