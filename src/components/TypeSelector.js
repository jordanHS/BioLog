import React from 'react';
import { Dropdown } from 'semantic-ui-react'

const animalTypes = [
    {
        Key: 'Mammal',
        text: 'Mammal',
        value: 'Mammal',
    },
    {
        Key: 'Bird',
        text: 'Bird',
        value: 'Bird',
    },
    {
        Key: 'Reptile',
        text: 'Reptile',
        value: 'Reptile',
    },
    {
        Key: 'Amphibian',
        text: 'Amphibian',
        value: 'Amphibian',
    },
    {
        Key: 'Fish',
        text: 'Fish',
        value: 'Fish',
    },
    {
        Key: 'Arthropod',
        text: 'Arthropod',
        value: 'Arthropod',
    },
    {
        Key: 'Mollusk',
        text: 'Mollusk',
        value: 'Mollusk',
    },
    {
        Key: 'Cnidarian',
        text: 'Cnidarian',
        value: 'Cnidarian',
    },
    {
        Key: 'Echinoderm',
        text: 'Echindoderm',
        value: 'echinoderm',
    }

]

const TypeSelector = () => (
    <Dropdown
    placeholder='Select a type'
    scrolling
    selection
    single
    options={animalTypes}
    />
)

export default TypeSelector;