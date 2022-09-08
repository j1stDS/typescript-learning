abstract class ALogger {
    abstract log(message: string): void

    printDate(): void {
        this.log(new Date().toString());
    }
}

class Logger extends ALogger {
    log(message: string) {
        console.log(message);
    }

    logWithDate(message: string): void {
        this.printDate();
        this.log(message);
    }
}

const logger = new Logger();

logger.logWithDate("My first logger!");