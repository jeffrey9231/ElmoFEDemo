import * as React from 'react';
import * as FetchActions from '../../actions';
import * as style from '../style.css';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import { get } from 'lodash';
import { RouteComponentProps } from 'react-router';
import { RootState } from '../../reducers';

export namespace Search {
  export interface Props extends RouteComponentProps<void> {
    users: UserAccountDetails[];
    actions: typeof FetchActions;
  }

  export interface State {
    searchQuery:string
  }
}

interface ListItemProps {
  name: string;
  id: string;
  history: any;
}

// Items of each user
const ListItem = (props: ListItemProps) => {
  const { name, id, history } = props;
  return (
    <li>
      <div className={style.view} >
        <label >
        <div onClick={()=>{history.push(`/details/${id}`)}}>
          {name}
          </div>
        </label>
      </div>
    </li>
  );
};

@connect(mapStateToProps, mapDispatchToProps)
export class Search extends React.Component<Search.Props, Search.State> {

  constructor(props?: Search.Props, context?: any) {
    super(props, context);
    this.state = {
      searchQuery: ''
    };
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleSearchOnClick = this.handleSearchOnClick.bind(this);
  }

  async componentWillMount() {
    const { actions } = this.props;
    // reset searchQuery value in store
    actions.fetchUserAccount({ searchQuery: '' });
  }

  handleOnChange(e) {
    this.setState({ searchQuery: e.target.value });
  }

  handleSearchOnClick() {
    const { searchQuery } = this.state;
    const { actions } = this.props;
    // send action to saga and redux to get search result
    actions.fetchUserAccount({ searchQuery });
  }

  render() {
    const { users, history } = this.props;
    return (
      <div className={style.normal}>
        <header>
        <h1>Elmo FE Demo</h1>
           <input className={style.edit}
          type="text"
          onChange={this.handleOnChange} 
          placeholder="Please enter user's twitter name or location"/>
        <Button className={style.button} variant="contained" onClick={this.handleSearchOnClick}>Search</Button>
      </header>
        <section className={style.main}>
          <ul className={style.normal}>
            {users.map(user =>
              <ListItem key={user.id} name={get(user, 'name')} id={get(user, 'id')} history={history}/>
            )}
          </ul>
        </section>
      </div>
    );
  }
}

function mapStateToProps(state: RootState) {
  return {
    users: state.users
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(FetchActions as any, dispatch)
  };
}