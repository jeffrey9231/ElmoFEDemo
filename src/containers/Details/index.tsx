import * as React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { RouteComponentProps } from "react-router";
import { get } from "lodash";
import Button from "@material-ui/core/Button";

import { RootState } from "../../reducers";
import * as actions from "../../actions";
import * as style from "../style.css";

export interface DetailsProps extends RouteComponentProps<void> {
  users: UserAccountDetails[];
  actions: typeof actions;
}

interface ListItemProps {
  name: string;
  value: any;
  isImg?: boolean;
}

const ListItem = (props: ListItemProps) => {
  const { name, value, isImg } = props;
  return (
    <li>
      <div className={style.view}>
        <label>
          {name}: {isImg ? <img src={value} /> : value}
        </label>
      </div>
    </li>
  );
};

@connect(mapStateToProps, mapDispatchToProps)
export class Details extends React.Component<DetailsProps> {
  componentDidMount() {
    const { match, actions } = this.props;
    // small ts issue of match.params just leave it to TODO
    actions.fetchUserAccountDetail({ searchQuery: match.params.user_id });
  }

  render() {
    const { users } = this.props;
    return (
      <div className={style.normal}>
        <header>
          <Button
            className={style.button}
            variant="contained"
            onClick={() => {
              history.back();
            }}
          >
            Go back
          </Button>
        </header>
        <section className={style.main}>
          <ul className={style.normal}>
            <ListItem name={"Name"} value={get(users, "[0].name")} />
            <ListItem
              name={"Twitter handle"}
              value={get(users, "[0].screen_name")}
            />
            <ListItem
              name={"Followers Count"}
              value={get(users, "[0].followers_count")}
            />
            <ListItem
              name={"Profile image"}
              value={get(users, "[0].profile_image_url")}
              isImg
            />
            <ListItem
              name={"TODO"}
              value={`can't find last tweets from GET users/show in Tweeter API`}
            />
          </ul>
        </section>
      </div>
    );
  }
}

function mapStateToProps(state: RootState) {
  return {
    users: state.users,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions as any, dispatch),
  };
}
