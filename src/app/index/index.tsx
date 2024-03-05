/* eslint-disable @typescript-eslint/no-unused-vars */
import { ReactNode } from 'react'
import { Text, View } from 'react-native'
import { styles } from './styles'

interface IndexProps {
  children: ReactNode
}

export default function Home({ children }: IndexProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Escolha {'\n'}
        <Text style={styles.subtitle}>os produtos</Text>
      </Text>

      <Text style={styles.message}>
        Descubra receitas baseadas nos produtos que você escolher.
      </Text>
    </View>
  )
}
