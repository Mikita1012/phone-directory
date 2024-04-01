test("Test TotalSubscribersReducer", () => {
    const action = {"type":"UPDATE_COUNT", "payload": 23};
    const actualResult = TotalSubscribersReducer({}, action);
    const expectedResult = {"count": 23};
    expect(actualResult).toEqual(expectedResult);
})