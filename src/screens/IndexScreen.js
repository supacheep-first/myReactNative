import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const IndexScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.elementsContainer}>
                <View style={{alignItems: "center"}}>
                    <Text style={styles.cusfont}>Name: supacheep ainthararuchikun (First)</Text>
                    <Text style={styles.cusfont}>Address: 1/720 Rattanathibet BangKarsor Nonthaburi 11000</Text>
                    <Text style={styles.cusfont}>Phone: 087-545-4285</Text>
                    <Text style={styles.cusfont}>GitHub: github.com/supacheep-first</Text>
                </View>

                <View style={styles.cusHeader}>
                    <Text style={styles.cusfontHeader}>E D U C A T I O N</Text>
                </View>
                <Text style={styles.cusfont}>Computer Science - Maejo University</Text>

                <View style={styles.cusHeader}>
                    <Text style={styles.cusfontHeader}>S K I L L S</Text>
                </View>
                <Text style={styles.cusfont}>java, javaScript, Angular, NodeJS</Text>

                <View style={styles.cusHeader}>
                    <Text style={styles.cusfontHeader}>W O R K   E X P E R I E N C E</Text>
                </View>
                <Text style={styles.cusfont}>- TCM Tech | On-site Social Security Office (CURRENT)</Text>
                <Text style={styles.cusfont}>- 3i infotech | On-site Information TechnologyGroup</Text>
                <Text style={styles.cusfont}>- Apar Technologies | On-site Wise Soft</Text>
                <Text style={styles.cusfont}>- PE Resourcing Service | On-site AIS</Text>
                <Text style={styles.cusfont}>- Optimus Soft | G-able</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 70,
    },
    cusHeader: {
        alignItems: "center", marginTop: 10
    },
    cusfont: {
        color: "red", fontSize: 16,
    },
    cusfontHeader: {
        color: "red", fontSize: 15, fontWeight: "bold"
    },
    elementsContainer: {
        marginLeft: 24,
        marginRight: 24,
        marginBottom: 24
    }
});


export default IndexScreen;