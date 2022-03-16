// export type complete = string[];
// export type incomplete = string[];
export type typeData={
	id:number,
	Name:String,
	DOB:String,
	salary:number,
	gender:String
}


interface storeType {
	state:typeData[];
}

export default storeType;
