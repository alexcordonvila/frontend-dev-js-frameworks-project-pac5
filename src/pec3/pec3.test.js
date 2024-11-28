import {
    fetchUser,
    getComments,
    fetchUserPromise,
    getCommentsAsync,
    fetchAsyncData,
    createTaskWorker
} from "./pec3.js"

// Setup

describe("jest", () => {
    test("should work", () => {
        expect(true).toBeTruthy();
    });

    test("should support mocking", () => {
        const mockFn = jest.fn();
        mockFn();
        expect(mockFn).toHaveBeenCalledTimes(1);
      });
});

// Exercise 1

describe('Exercise 1 - fetchUser', () => {
    const noop = () => (undefined);

    test('should return true for valid ids', () => {
        expect(fetchUser(1, noop)).toBe(true);
        expect(fetchUser(2, noop)).toBe(true);
        expect(fetchUser(3, noop)).toBe(true);
    });

    test('should return false for invalid ids', () => {
        expect(fetchUser(999, noop)).toBe(false);
        expect(fetchUser(null, noop)).toBe(false);
        expect(fetchUser("1", noop)).toBe(false);
    });

    test('should call the callback with the correct name for id 1', () => {
        const mockCallback = jest.fn();
        fetchUser(1, mockCallback);

        expect(mockCallback).toHaveBeenCalledWith('Brendan Eich');
        expect(mockCallback).toHaveBeenCalledTimes(1);
    });

    test('should call the callback with the correct name for id 2', () => {
        const mockCallback = jest.fn();
        fetchUser(2, mockCallback);

        expect(mockCallback).toHaveBeenCalledWith('Douglas Crockford');
        expect(mockCallback).toHaveBeenCalledTimes(1);
    });

    test('should call the callback with the correct name for id 3', () => {
        const mockCallback = jest.fn();
        fetchUser(3, mockCallback);

        expect(mockCallback).toHaveBeenCalledWith('Jeremy Ashkenas');
        expect(mockCallback).toHaveBeenCalledTimes(1);
    });

    test('should not call the callback if no user is found', () => {
        const mockCallback = jest.fn();
        fetchUser(999, mockCallback);

        expect(mockCallback).not.toHaveBeenCalled();
    });
});

// Exercise 2

function getCommentsTests(number, func) {
    describe(`Exercise ${number} - ${func.name}`, () => {
        const resolveFn = (i) => Promise.resolve(i);

        test('should return a promise', () => {
            const result = func(resolveFn, resolveFn, resolveFn);

            expect(result).toBeDefined();
            expect(result).toBeInstanceOf(Promise);
        });

        describe('with correct arguments', () => {
            let fetchUser;
            let fetchPosts;
            let fetchComments;
            let comments;

            beforeEach(async () => {
                fetchUser = jest.fn().mockResolvedValue(1);
                fetchPosts = jest.fn().mockResolvedValue([101, 102]);
                fetchComments = jest.fn().mockResolvedValue(['Comment 1', 'Comment 2']);
        
                comments = await func(fetchUser, fetchPosts, fetchComments);
            });

            test('should call correctly fetchUser', () => {
                expect(fetchUser).toHaveBeenCalledTimes(1);
                expect(fetchUser).toHaveBeenCalledWith();
            });
        
            test('should pass the data correctly from fetchUser to fetchPosts', () => {
                expect(fetchPosts).toHaveBeenCalledTimes(1);
                expect(fetchPosts).toHaveBeenCalledWith(1);
            });
        
            test('should pass the data correctly from fetchPosts to fetchComments', () => {
                expect(fetchComments).toHaveBeenCalledTimes(1);
                expect(fetchComments).toHaveBeenCalledWith([101, 102]);
            });
        
            test('should resolve with array of strings when all steps succeed', () => {    
                expect(comments).toEqual(['Comment 1', 'Comment 2']);
            });
        });

        test('should reject with error message when fetchUser fails', async () => {
            const fetchUser = jest.fn().mockRejectedValue('User fetch failed');
            const fetchPosts = jest.fn();
            const fetchComments = jest.fn();

            await expect(func(fetchUser, fetchPosts, fetchComments)).rejects.toThrowError('Error: User fetch failed');
        });

        test('should reject with error message when fetchPosts fails', async () => {
            const fetchUser = jest.fn().mockResolvedValue(1);
            const fetchPosts = jest.fn().mockRejectedValue('Posts fetch failed');
            const fetchComments = jest.fn();

            await expect(func(fetchUser, fetchPosts, fetchComments)).rejects.toThrowError('Error: Posts fetch failed');
        });

        test('should reject with error message when fetchComments fails', async () => {
            const fetchUser = jest.fn().mockResolvedValue(1);
            const fetchPosts = jest.fn().mockResolvedValue([101, 102]);
            const fetchComments = jest.fn().mockRejectedValue('Comments fetch failed');

            await expect(func(fetchUser, fetchPosts, fetchComments)).rejects.toThrowError('Error: Comments fetch failed');
        });
    });
}

getCommentsTests(2, getComments);

// Exercise 3

describe('Exercise 3 - fetchUserPromise', () => {
    test('should return a Promise', () => {
        expect(fetchUserPromise(1)).toBeInstanceOf(Promise);
    });

    test('should resolve with the correct user object when id is within 1-999 range', async () => {
        const id = 5;
        const result = await fetchUserPromise(id);
        expect(result).toEqual({ id: 5, name: 'User 5' });
    });
  
    test('should reject with "User id not found" error when id is out of range', async () => {
        const id = 1000;
        await expect(fetchUserPromise(id)).rejects.toThrowError("User id not found");
    });
  
    test('should reject with "Provided id not valid" error when id is not a number', async () => {
        const id = "notANumber";
        await expect(fetchUserPromise(id)).rejects.toThrowError("Provided id not valid");
    });
});

// Exercise 4

describe('Exercise 4 - fetchAsyncData', () => {
    test('should return an object', async () => {
        const mockAsyncCallback = jest.fn().mockResolvedValue("Success");
        expect(await fetchAsyncData(mockAsyncCallback)).toBeInstanceOf(Object);
    });

    test('should call asyncCallback callback', async () => {
        const mockAsyncCallback = jest.fn().mockResolvedValue("Success");
        await fetchAsyncData(mockAsyncCallback);
        expect(mockAsyncCallback).toHaveBeenCalledTimes(1);
    });

    test('should return correct success payload when asyncCallback is resolved', async () => {
        const mockAsyncCallback = jest.fn().mockResolvedValue("Amazing success!");
        const result = await fetchAsyncData(mockAsyncCallback);

        expect(result).toEqual({
            status: "success",
            data: "Amazing success!",
        });
    });
    
    test('should return correct error payload when asyncCallback is rejected', async () => {
        const mockAsyncCallback = jest.fn().mockRejectedValue("Unknown failure");
        const result = await fetchAsyncData(mockAsyncCallback);

        expect(result).toEqual({
            status: "error",
            message: "Unknown failure"
        });
    });
});

// Exercise 5

getCommentsTests(5, getCommentsAsync);

// Exercise 6

describe("createTaskWorker", () => {
    let worker;

    beforeEach(() => {
        jest.useFakeTimers();
        worker = createTaskWorker();
    });

    afterEach(() => {
        jest.useRealTimers();
    });

    test("should initialize with an empty task list", () => {
        const status = worker.getStatus();
        expect(status).toEqual([]);
    });

    test("should add a task with the right information", () => {
        worker.addTask(() => Promise.resolve("Task 1 completed"));

        const status = worker.getStatus();
        expect(status).toHaveLength(1);
        expect(status[0]).toMatchObject({
            status: "pending",
            result: null,
            error: null,
        });
    });

    test("should run the task and update status to 'in-progress'", async () => {
        const mockTask = jest.fn(() => Promise.resolve("Task 1 result"));
        worker.addTask(mockTask);

        jest.runAllTimers(); // Fast-forward timers

        const status = worker.getStatus();
        expect(mockTask).toHaveBeenCalled();
        expect(status[0]).toMatchObject({
            status: "in-progress",
            result: null,
            error: null,
        });
    });

    test("should update status to 'completed' and store result", async () => {
        const mockTask = jest.fn(() => Promise.resolve("Task 1 result"));
        worker.addTask(mockTask);

        jest.runAllTimers(); // Fast-forward timers
        await Promise.resolve(); // Flush background tasks

        const status = worker.getStatus();
        expect(mockTask).toHaveBeenCalled();
        expect(status[0]).toMatchObject({
            status: "completed",
            result: "Task 1 result",
            error: null,
        });
    });

    test("should update task status to 'failed' and store error", async () => {
        const mockTask = jest.fn(() => Promise.reject(new Error("Task failed")));
        worker.addTask(mockTask);

        jest.runAllTimers(); // Fast-forward timers
        await Promise.resolve(); // Flush background tasks

        const status = worker.getStatus();
        expect(mockTask).toHaveBeenCalled();
        expect(status[0]).toMatchObject({
            status: "failed",
            result: null,
            error: "Task failed",
        });
    });

    test("should handle multiple tasks", async () => {
        const mockTask = jest.fn(() => Promise.resolver(""));

        worker.addTask(mockTask);
        worker.addTask(mockTask);
        worker.addTask(mockTask);

        const status = worker.getStatus();

        expect(status).toHaveLength(3);
    });
});