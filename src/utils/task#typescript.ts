// 1. Работа с простыми типами
type TConcat = (str1: string, str2: string) => string;
export const concat:TConcat = (str1, str2) => `${str1}${str2}`;

// 2. Работа с интерфейсами
type TNumberString = string | number;

interface IHomeWithoutTask {
    howIDoIt: string;
    simeArray: Array<TNumberString>;
}

interface IHomeTaskWithData {
    howIDoIt: string;
    simeArray: Array<TNumberString>;
    withData: Array<IHomeWithoutTask>;
}

export const MyHometask: IHomeTaskWithData = {
    howIDoIt: "I Do It Wel",
    simeArray: ["string one", "string two", 42],
    withData: [{ howIDoIt: "I Do It Wel", simeArray: ["string one", 23] }],
}

// 3. Типизация функций, используя Generic

interface MyArray<T> {
    [N: number]: T;
    reduce<U>(fn: (acc: U, value: T, index: number, array: MyArray<T>) => U, initialValue: U): U;
}

// 4. Работа с MappedTypes

interface IHomeTask {
    data: string;
    numbericData: number;
    date: Date;
    externalData: {
        basis: number;
        value: string;
    }
}

type MyPartial<T> = {
    [N in keyof Partial<T>]: T[N] extends object ? Partial<T[N]> : T[N]
}

export const homeTask: MyPartial<IHomeTask> = {
    externalData: {
        value: 'win'
    }
}



