const formatFullname = require('../formatFullname.js');
const expect = require('chai').expect;

describe('formatFullname', () => {
  it('should return an error if "content" arg is not a string', () => {
    expect(formatFullname(undefined)).to.equal('Error');
    expect(formatFullname(12)).to.equal('Error');
    expect(formatFullname({})).to.equal('Error');
    expect(formatFullname([])).to.equal('Error');
    expect(formatFullname(function() {})).to.equal('Error');
  });

  it('should return error if "fullName" is empty', () => {
    expect(formatFullname('')).to.equal('Error');
  });

  it('should return proper "firstName" and "lastName" values', () => {
    expect(formatFullname('AmaNdA Doe')).to.equal('Amanda Doe');
    expect(formatFullname('JOHN doe')).to.equal('John Doe');
  });

  it('should return error if there is more or less properties than required', () => {
    expect(formatFullname('Amanda Doe Test')).to.equal('Error');
    expect(formatFullname('Joe')).to.equal('Error');
  })
});