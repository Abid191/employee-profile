
import { Document, Image, Page, PDFViewer, StyleSheet, Text, View } from '@react-pdf/renderer'
import './App.css'


const styles = StyleSheet.create({
  page: {
    position: 'relative',
    padding: 30,
    justifyContent: ' flex-start'
  },
  Header: {
    textAlign: 'center',
  },
  HeaderTextOne: {
    fontSize: 15
  },
  HeaderTextTwo: {
    fontSize: 9,
    marginTop: 5
  },
  SubHeader: {
    textAlign: 'center',
    fontSize: 16,
    marginTop: 5
  },
  divider: {
    marginTop: 3,
    marginBottom: 5,
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
    borderBottomStyle: 'solid',
  },
  Employee: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
  },
  EmployeeImgSection: {
    width: '50%'
  },
  EmployeeImg: {
    height: 87,
    width: 70,
  },
  EmployeeInfoTable: {
    display: 'table',
    width: '50%',
  },
  EmployeeInfoHeaderRow: {
    flexDirection: 'row',
    border: 'solid',
    justifyContent: 'center',
    borderWidth: 0.5,
    height: 'auto',
    padding: 5,
    backgroundColor: '#cedded',
  },
  EmployeeInfoRow: {
    flexDirection: 'row',
    width: '100%'
  },
  EmployeeInfoColOne: {
    borderStyle: 'solid',
    borderWidth: 0.8,
    padding: 5,
    width: '100%',
    backgroundColor: '#f1f3f9'
  },
  EmployeeInfoColTwo: {
    borderStyle: 'solid',
    borderWidth: 0.8,
    padding: 5,
    width: '100%',
  },
  EmployeeHeaderText: {
    fontSize: 10,
  },
  EmpColLeftText: {
    fontSize: 9,
  },
  EmpColRightText: {
    fontSize: 9,
  },

  Details: {
    marginTop: 10
  },
  DetailsRow: {
    flexDirection: 'row',
    border: 'solid',
    justifyContent: 'center',
    borderWidth: 0.5,
    height: 'auto',
    padding: 5,
    backgroundColor: '#cedded',
  },
  DetailsRowTextOne: {
    fontSize: 10,
  },
  DetailsTextTwo: {
    fontSize: 5,
  },
})

const MyApp = () => {
  return (
    <PDFViewer width={1200} height={760}>
      <MyDocument></MyDocument>
    </PDFViewer>
  )
}
const MyDocument = () => {
  return (
    <Document title='Employee Profile'>
      <Page size="A4" style={styles.page}>
        <View>
          {/* Header */}
          <View style={styles.Header}>
            <Text style={styles.HeaderTextOne}>Walton Digi-Tech Industries Ltd.</Text>
            <Text style={styles.HeaderTextTwo}>Corporate Office</Text>
            <Text style={styles.HeaderTextTwo}>Product : Computer</Text>
          </View>
          <View style={styles.divider} />
          <View style={styles.SubHeader}><Text>Employee Profile</Text> </View>

          {/* Employee Info */}

          <View style={styles.Employee}>
            <View style={styles.EmployeeImgSection}>
              <Image style={styles.EmployeeImg} src="../src/assets/img/download.jfif"></Image>
            </View>
            <View style={styles.EmployeeInfoTable}>
              <View style={styles.EmployeeInfoHeaderRow}>
                <Text style={styles.EmployeeHeaderText}>Employee Info</Text>
              </View>
              <View style={styles.EmployeeInfoRow}>
                <View style={styles.EmployeeInfoColOne}>
                  <Text style={styles.EmpColLeftText}>Employee ID</Text>
                </View>
                <View style={styles.EmployeeInfoColTwo}>
                  <Text style={styles.EmpColRightText}>I-480</Text>
                </View>
              </View>
              <View style={styles.EmployeeInfoRow}>
                <View style={styles.EmployeeInfoColOne}>
                  <Text style={styles.EmpColLeftText}>Name</Text>
                </View>
                <View style={styles.EmployeeInfoColTwo}>
                  <Text style={styles.EmpColRightText}>Abid Hasan Purno</Text>
                </View>
              </View>
              <View style={styles.EmployeeInfoRow}>
                <View style={styles.EmployeeInfoColOne}>
                  <Text style={styles.EmpColLeftText}>Mobile</Text>
                </View>
                <View style={styles.EmployeeInfoColTwo}>
                  <Text style={styles.EmpColRightText}>018xxxxxxx</Text>
                </View>
              </View>
            </View>
          </View>

          {/* Details */}

          <View style={styles.Details}>
            <View style={styles.DetailsRow}>
              <Text style={styles.DetailsRowTextOne}>Details</Text>
            </View>
            <View style={styles.EmployeeInfoRow}>
              <View style={styles.EmployeeInfoColOne}>
                <Text style={styles.EmpColLeftText}>Date of Group Joining</Text>
              </View>
              <View style={styles.EmployeeInfoColTwo}>
                <Text style={styles.EmpColRightText}>01-JUN-2024</Text>
              </View>
              <View style={styles.EmployeeInfoColOne}>
                <Text style={styles.EmpColLeftText}>Employee Category</Text>
              </View>
              <View style={styles.EmployeeInfoColTwo}>
                <Text style={styles.EmpColRightText}>Apprentice</Text>
              </View>
            </View>


            <View style={styles.EmployeeInfoRow}>
              <View style={styles.EmployeeInfoColOne}>
                <Text style={styles.EmpColLeftText}>Gross Salary</Text>
              </View>
              <View style={styles.EmployeeInfoColTwo}>
                <Text style={styles.EmpColRightText}>##.##</Text>
              </View>
              <View style={styles.EmployeeInfoColOne}>
                <Text style={styles.EmpColLeftText}>Position</Text>
              </View>
              <View style={styles.EmployeeInfoColTwo}>
                <Text style={styles.DetailsTextTwo}>WDTIL.Computer.ICT.Commercial Operations.Bench
                  Education.Core Development.Intern</Text>
              </View>
            </View>

            <View style={styles.EmployeeInfoRow}>
              <View style={styles.EmployeeInfoColOne}>
                <Text style={styles.EmpColLeftText}>Shift</Text>
              </View>
              <View style={styles.EmployeeInfoColTwo}>
                <Text style={styles.EmpColRightText}>9AM-6PM</Text>
              </View>
              <View style={styles.EmployeeInfoColOne}>
                <Text style={styles.EmpColLeftText}>Status</Text>
              </View>
              <View style={styles.EmployeeInfoColTwo}>
                <Text style={styles.EmpColLeftText}>ACTIVE</Text>
              </View>
            </View>
          </View>

          {/* Job Description */}

          <View style={styles.Details}>
            <View style={styles.DetailsRow}>
              <Text style={styles.DetailsRowTextOne}>Job Description</Text>
            </View>
            <View style={styles.EmployeeInfoRow}>
              <View style={styles.EmployeeInfoColOne}>
                <Text style={styles.EmpColLeftText}>Responsiblity</Text>
              </View>
              <View style={styles.EmployeeInfoColTwo}>
                <Text style={styles.EmpColRightText}>Responsiblity</Text>
              </View>
            </View>
            <View style={styles.EmployeeInfoRow}>
              <View style={styles.EmployeeInfoColOne}>
                <Text style={styles.EmpColLeftText}>Reports to</Text>
              </View>
              <View style={styles.EmployeeInfoColTwo}>
                <Text style={styles.EmpColRightText}>Md. Mohiminur Rahman - 54731</Text>
              </View>
            </View>
            <View style={styles.EmployeeInfoRow}>
              <View style={styles.EmployeeInfoColOne}>
                <Text style={styles.EmpColLeftText}>Concern HR</Text>
              </View>
              <View style={styles.EmployeeInfoColTwo}>
                <Text style={styles.EmpColRightText}>Zinat Afroj - 49785</Text>
              </View>
            </View>
          </View>
        </View>
      </Page>
    </Document>
  )
}


export default MyApp
