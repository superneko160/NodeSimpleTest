/**
 * Unit Test
 * Test: node MyMathTest.js
 */
const assert = require('assert')
const { add } = require('./MyMath')

if (require.main === module) {
    main()
}

async function main() {
    try {
        // テストケース
        const tests = [
            addTest,
            alwaysFailTest,
        ]
        // テストケースをすべてテスト
        for (const test of tests) {
            try {
                await test()
                console.info(`OK ${test.name}`)
            }
            catch (err) {
                console.info(`NG ${test.name}`)
                console.error(err)
            }
        }
    }
    catch (err) {
        console.error(err)
    }
}

/**
 * 成功用テスト
 */
async function addTest() {
    const n1 = 1
    const n2 = 2
    const actual = add(n1, n2)
    const expected = 3

    assert.strictEqual(actual, expected)
}

/**
 * 失敗用テスト
 */
async function alwaysFailTest() {
    assert.fail('alwaysFail')
}