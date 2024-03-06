import React from 'react'
import { Link } from 'react-router-dom'

const AboutUsPage = () => {
    return (
        <>
            <h1>About Flashstack</h1>
            <h2>What's Flashstack?</h2>
            <p>Flashstack is a comprehensive revision tool designed to aid students in the creation and revision of flashcards and notes.</p>
            <p>Quickly assemble an infinite number of flashstacks, filled with cards that you can easily revise!</p>
            <h2>What do I need to use it?</h2>
            <p>You must have an active email address to use this service, as that's how we keep track of your flashstacks, cards and notes!</p>
            <p>Flashstack promises to keep all data secured.</p>
            <p>We hope that this service improves your quality of learning!</p>
            <h2>Still got questions?</h2>
            <Link to="/contact">Contact us here!</Link>
        </>
    )
}

export default AboutUsPage