import React from 'react'
import { TouchableOpacity, SafeAreaView, Text } from 'react-native'

import { styles } from './Style'

import useExample from './Hook'

function Example() {

    const { data, handleAdd } = useExample()

    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity onPress={handleAdd} style={styles.button}>
                <Text style={styles.buttonLabel}>{data}</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

export default Example