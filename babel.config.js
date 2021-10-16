module.exports = {
  presets: ["@babel/preset-env", "@babel/preset-react"],
  plugins: [
    "@babel/plugin-proposal-object-rest-spread",
    "@babel/plugin-transform-react-jsx",
    ["inline-react-svg", {
      "svgo": {
        "plugins": [
          'preset-default',
          "cleanupIDs",
          "convertStyleToAttrs"	
        ]
      }
    }],
    ["module-resolver", { "root": ["./src"] }],
    ["@babel/plugin-proposal-class-properties", {"loose": true}]
  ]
}