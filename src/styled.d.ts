import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      background: string;
      text: string;
      gray0: string;
      gray1: string;
      white: string;
    };
  }
}
