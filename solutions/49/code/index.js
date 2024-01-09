class Singleton {
	constructor() {
		return (Singleton.instance = Singleton.instance || this)
	}

	static getInstance() {
		return Singleton.instance || new Singleton()
	}

	message() {
		return 'Hello Singleton!'
	}
}

export default Singleton
