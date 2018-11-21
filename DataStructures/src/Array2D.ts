export class Array2D<T>{
    private readonly items: T[][];
    readonly rows: number;
    readonly columns: number;

    constructor(rows: number, columns: number, defaultValue: T = undefined){
        this.rows = rows;
        this.columns = columns;

        this.items = new Array(rows);
        for(let r = 0; r < rows; r++){
            this.items[r] = [];

            if(defaultValue !== undefined){
                for(let c = 0; c < columns; c++){
                    this.items[r][c] = defaultValue;
                }
            }
        }
    }

    get(row: number, column: number){
        this.check(row, column);

        return this.items[row][column];
    }

    tryGet(row: number, column: number, defaultValue: T = undefined){
        try{
            this.check(row, column);
            return this.items[row][column];
        } catch{
            return defaultValue;
        }
    }

    set(row: number, column: number, value: T){
        this.check(row, column);

        this.items[row][column] = value;
    }

    private check(row: number, column: number){
        if(row >= this.rows || column >= this.columns || row < 0 || column < 0){
            throw new Error("Invalid arguments row/column = " + row + "/" + column);
        }
    }
}