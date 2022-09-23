class ErrorCatch {

    @Catch()
    throwError() {
        throw new Error("Error raised");
    }
}

function Catch() {
    return (
        target: Object,
        propertyKey: string,
        descriptor: TypedPropertyDescriptor<(...args: any[]) => any>
    ) => {
        let oldValue = descriptor.value;
        descriptor.value = (...args: any[]) => {
            try {
                oldValue?.apply(target, args);
            } catch (e) {
                console.log(`Error catched: ${e}`);
            }
        }


    }
}

new ErrorCatch().throwError();