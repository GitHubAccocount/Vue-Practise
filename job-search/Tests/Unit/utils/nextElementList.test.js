import nextElementList from '../../../src/utils/nextElementList'

describe('nexElementList', () => {
  it('locates element in list and returns the next element in list', () => {
    const list = ['A', 'B', 'C', 'D', 'E']
    const value = 'A'
    const nextValue = nextElementList(list, value)
    expect(nextValue).toBe('B')
  })

  describe('when element is at the end of the list', () => {
    it('locates next element at start of the list', () => {
      const list = ['A', 'B', 'C', 'D', 'E']
      const value = 'E'
      const nextValue = nextElementList(list, value)
      expect(nextValue).toBe('A')
    })
  })
})
