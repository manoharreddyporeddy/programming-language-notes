class SingleObject {
}

let Singleton = (function () {
    let instance;

    return {
        getInstance: function () {
            if (!instance) {
                instance = new SingleObject();
            }
            return instance;
        }
    };
})();

export default Singleton;
