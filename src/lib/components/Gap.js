import React, { useContext } from "react";
import { ThemeContext, Theme } from "unifyre-react-helper";

// commonjs({
//   namedExports: {
//     // left-hand side can be an absolute path, a path
//     // relative to the current directory, or the name
//     // of a module in node_modules
//     "unifyre-react-helper": ["ThemeContext", "Theme"]
//   }
// });

export function Gap({ size }) {
  const theme = useContext(ThemeContext);
  const styles = themedStyles(theme);
  return (
    <div>
      <p
        style={{ ...styles.gap, ...(size === "small" ? styles.smallGap : {}) }}
      ></p>
    </div>
  );
}

const themedStyles = function(theme) {
  return {
    gap: {
      width: "100%",
      height: theme.get(Theme.Spaces.gap)
    },
    smallGap: {
      height: theme.get(Theme.Spaces.gap) / 2
    }
  };
};
