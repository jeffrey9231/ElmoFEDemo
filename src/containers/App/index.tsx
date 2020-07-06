import * as React from 'react';
import * as style from '../style.css';
import Button from '@material-ui/core/Button';
import { RouteComponentProps } from 'react-router';

export namespace App {
  export interface Props extends RouteComponentProps<void> {}
}

export class App extends React.Component<App.Props> {

  render() {
    const { history } = this.props;
    return (
      <div className={style.normal}>
        <Button className={style.button} variant="contained" onClick={()=>{history.push('/search')}}>Go to search page</Button>
      </div>
    );
  }
}
