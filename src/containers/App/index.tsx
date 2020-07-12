import * as React from "react";
import Button from "@material-ui/core/Button";
import { RouteComponentProps } from "react-router";

import * as style from "../style.css";

export interface AppProps extends RouteComponentProps<void> {}

export class App extends React.Component<AppProps> {
  render() {
    const { history } = this.props;
    return (
      <div className={style.normal}>
        <Button
          className={style.button}
          variant="contained"
          onClick={() => {
            history.push("/search");
          }}
        >
          Go to search page
        </Button>
      </div>
    );
  }
}
