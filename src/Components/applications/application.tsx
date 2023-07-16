import React from 'react'

export const Application = () => {
  return (
    <>
    <h1>Job application form</h1>
    <h2>Section 1</h2>
    <p>All fields are mandatory</p>
    <img src="https://via.placeholder.com/150" alt="a new cricket" />
    <span title="close">X</span>
    <div data-testid="custom-id">Custom ID</div>
    <form>
        <div>
            <label htmlFor="name">Name</label>
        <input type="text" id="name" placeholder='Fullname' value="Abhay" onChange={( () => {})} />
        </div>
        <div>
            <label htmlFor="bio">Bio</label>
            <textarea id="bio" name='bio'></textarea>
        </div>
        <div>
            <label htmlFor="Job-location">Job Location</label>
            <select  id="job-location">
                <option value="">Select A country</option>
                <option value="US">United States</option>
                <option value="GB">United Kingdom</option>
                <option value="CA">CANADA</option>
                <option value="IN">India</option>
                <option value="AU">Australia</option>
            </select>
        </div>
        <div>
            <label htmlFor="">
                <input type="checkbox" name="" id="Terrms" />I agree to the condition
            </label>
        </div>
        <button>Submit</button>
    </form>
    </>
  )
}
