export interface addAction {
	type: "ADD_CONTACT";
	todo: string;
}

export interface delateAction {
	type: "DELETE_CONTACT";
	todo: string;
}

export interface deleteTodoAction {
	type: "DELETE_TODO";
	todo: string;
}
