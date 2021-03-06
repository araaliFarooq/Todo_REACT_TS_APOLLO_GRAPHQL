// import { Card, Col, Divider,  Input, Row, Spin } from 'antd';
// import flowright from 'lodash.flowright';
// import * as queryString from 'query-string';
// import * as React from 'react';
// import { withApollo } from 'react-apollo';
// import { RouteComponentProps, withRouter } from 'react-router';
// import { NoteDeleteMutation, NotesQuery } from '../../generatedModels';
// import CreateNoteForm from './CreateNoteForm';
// interface INotesState {
//   searchQuery?: string;
// }
// interface INotesBaseProps {
//   deleteNote: NoteDeleteMutation.MutationFn;
// }
// type INotesProps = NotesQuery.Props<INotesBaseProps> & RouteComponentProps;
// class Notes extends React.Component<INotesProps, INotesState> {
//   constructor(props: INotesProps) {
//     super(props);
//     // parsing ?search=something to { search: 'something' }
//     const query = queryString.parse(props.location.search);
//     this.state = {
//       searchQuery: query && query.search ? query.search.toString() : undefined
//     };
//   }
//   public render() {
//     const { searchQuery } = this.state;
//     const { data } = this.props;
//     return (
//       <Row>
//         <Col span={12} offset={6}>
//           <Divider>Create a Todo</Divider>
//           <CreateNoteForm onSuccess={this.handleCreateNoteFormSuccess} />
//           <Divider>TODOs</Divider>
//           <Input.Search
//             placeholder="Search..."
//             enterButton="Search"
//             defaultValue={searchQuery}
//             onChange={this.handleSearchQueryChange}
//             onSearch={this.handleSearch}
//           />
//           {data!.loading ? (
//             <Spin style={{ marginTop: 16, display: 'block' }} />
//           ) : (
//             <div>
//               {data!.notes!.edges.map((edge) => (
//                 <Card
//                   key={edge!.node!.id}
//                   style={{ marginTop: 16 }}
//                   actions={[
//                     <Icon
//                       type="delete"
//                       key={edge!.node!.id}
//                       onClick={() => this.handleDeleteNote(edge!.node!.id)}
//                     />
//                   ]}
//                 >
//                   <Card.Meta
//                     title={edge!.node!.title}
//                     description={edge!.node!.body}
//                   />
//                 </Card>
//               ))}
//             </div>
//           )}
//         </Col>
//       </Row>
//     );
//   }
//   private handleSearchQueryChange = (event: any) => {
//     this.setState({
//       searchQuery: event.target.value || undefined
//     });
//   };
//   private handleSearch = () => {
//     const { searchQuery } = this.state;
//     const { history, location } = this.props;
//     // Here we're updating our url after clicking `Search` button.
//     // For example, when we type `food` into seach input, our url
//     // will transform from `http://localhost:3000/` to
//     // `http://localhost:3000/?search=food`
//     history.push({
//       pathname: location.pathname,
//       // parsing { search: searchQuery } to ?search=searchQuery
//       search: queryString.stringify({
//         search: searchQuery
//       })
//     });
//   };
//   private handleCreateNoteFormSuccess = () => {
//     const { data } = this.props;
//     return data!.refetch();
//   };
//   private handleDeleteNote = (id: string) => {
//     const { data, deleteNote } = this.props;
//     return deleteNote({ variables: { id } }).then(() => data!.refetch());
//   };
// }
// export default flowright(
//   withApollo,
//   withRouter,
//   NotesQuery.HOC({
//     options: (props: INotesProps) => ({
//       variables: queryString.parse(props.location.search)
//     })
//   }),
//   NoteDeleteMutation.HOC({
//     props: ({ mutate }) => ({
//       // renaming mutation from `mutate` to `deleteNote`
//       // (more readable)
//       // and passing it to props
//       deleteNote: mutate
//     })
//   })
// )(Notes);
