import type { Preview } from "@storybook/react";
import { ThemeProvider } from "../src/contexts/ThemeContext";
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { lightTheme } from "../src/themes/muiTheme";
import { DndContext } from "@dnd-kit/core";
import "../src/index.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => {
      return (
        <ThemeProvider>
          <MuiThemeProvider theme={lightTheme}>
            <CssBaseline />
            <DndContext>
              <div style={{ padding: "1rem" }}>
                <Story />
              </div>
            </DndContext>
          </MuiThemeProvider>
        </ThemeProvider>
      );
    },
  ],
};

export default preview;

