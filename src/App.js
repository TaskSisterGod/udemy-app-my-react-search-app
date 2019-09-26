import React,{Component} from 'react';
import { ApolloProvider } from 'react-apollo'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'
import client from "./client"

const ME = gql`
	query me {
		user(login: "iteachonudemy"){
			name
			avatarUrl
		}
	}
`

class App extends Component {
	render(){
		return (
			<ApolloProvider client={client}>
				<div>Hello World</div>

				<Query query={ME}>
					{
						({loading,error,data}) => {
							if(loading) return 'loading'
							if(error) return 'Error'
							return <div>{data.user.name}</div>
						}
					}
				</Query>
			</ApolloProvider>
		)
	}
}

export default App
