import QuickSearch from '../components/QuickSearch';
import * as Actions from '../stateManagement/actions';
import { connect, Dispatch } from 'react-redux';

export function mapStateToProps({ name, dateCreated, status, files }: IQuickSearchState) {
  return {
    files,
    name,
    dateCreated,
    status
  };
}

export function mapDispatchToProps(dispatch: Dispatch<Actions.SearchFiles>) {
  return {
    onSearchFiles: () => dispatch(Actions.searchFiles()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(QuickSearch);