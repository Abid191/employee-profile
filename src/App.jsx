
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
    borderWidth: 1,
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
    borderWidth: 1,
    padding: 5,
    width: '100%',
    borderTopWidth: 0,
    borderRightWidth: 0,
    backgroundColor: '#f1f3f9'
  },
  EmployeeInfoColTwo: {
    borderStyle: 'solid',
    borderWidth: 1,
    padding: 5,
    width: '100%',
    borderTopWidth: 0,
  },
  EmployeeInfoColThree: {
    borderStyle: 'solid',
    borderWidth: 1,
    padding: 5,
    width: '100%',
    borderTopWidth: 0,
    borderLeftWidth: 0,
    backgroundColor: '#f1f3f9'

  }, EmployeeInfoColFour: {
    borderStyle: 'solid',
    borderWidth: 1,
    padding: 5,
    width: '100%',
    borderTopWidth: 0,
    borderLeftWidth: 0,
  },
  EmployeeHeaderText: {
    fontSize: 10,
  },
  EmpColLeftText: {
    fontSize: 9,
    borderRight: 0,
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
    borderWidth: 1,
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
  PresentRow: {
    flexDirection: 'row',
  },
  PresentColOne: {
    border: 'solid',
    borderWidth: 1,
    height: 'auto',
    padding: 5,
    backgroundColor: '#cedded',
    width: '100%',
    textAlign: 'center'
  },
  PresentColTwo: {
    border: 'solid',
    borderWidth: 1,
    borderLeftWidth: 0,
    height: 'auto',
    padding: 5,
    backgroundColor: '#cedded',
    width: '100%',
    textAlign: 'center'
  },


  table: {
    marginTop: 20,
    display: 'table',
    width: 'auto',
  },
  tableRow: {
    flexDirection: 'row',
  },
  tableCol: {
    width: '25%',
    borderStyle: 'solid',
    borderWidth: 0.8,
    height: 'auto',
    padding: 5,
    backgroundColor: 'tomato'
  },
  headerText: {
    fontSize: 5,
  },

  tableColTwo: {
    width: '25%',
    borderStyle: 'solid',
    borderWidth: 0.8,
    height: 'auto',
    padding: 4,
    textAlign: 'center',
    display: 'flex',
    alignContent: 'center'
  },
  headerTextTwo: {
    fontSize: 10,
  },

  Educationtable: {
    display: 'table',
    marginTop: 10,
  },
  EducationtableRow: {
    flexDirection: 'row',
  },
  EducationtTableCol: {
    textAlign: 'center',
    width: '100%',
    border: 'solid',
    justifyContent: 'center',
    borderWidth: 1,
    height: 'auto',
    padding: 5,
    backgroundColor: '#cedded',
  },
  EducationtColOne: {
    border: 'solid',
    textAlign: 'center',
    borderWidth: 1,
    // height: 'auto',
    padding: 5,
    borderTopWidth: 0,
    borderLeftWidth: 0,
    backgroundColor: '#e1e6f6',
    width: '25%',

  },
  EducationtColTwo: {
    border: 'solid',
    textAlign: 'center',
    borderWidth: 1,
    // height: 'auto',
    width: '25%',
    padding: 5,
    borderTopWidth: 0,
    backgroundColor: '#e1e6f6',
  },
  EducationtColThree: {
    border: 'solid',
    justifyContent: 'center',
    borderWidth: 1,
    width: '25%',
    // height: 'auto',
    textAlign: 'center',
    padding: 5,
    borderTopWidth: 0,
    borderLeftWidth: 0,
  },
  EducationtColFour: {
    border: 'solid',
    textAlign: 'center',
    borderWidth: 1,
    width: '25%',
    height: 'auto',
    padding: 5,
    borderTopWidth: 0,
  },
  EducationtText: {
    fontSize: 7.5,
  },
  EducationtTextt: {
    fontSize: 10,
  },

  footer: {
    flexDirection: 'row',
    position: 'absolute',
    display: 'block',
    bottom: 20,
    borderTop: ' 1px solid black',
    width: '100%',
    fontSize: 10,
    justifyContent: 'space-between',
    // marginTop: 20,
    marginLeft: 30,
  },
  footerText: {
    fontSize:8,
    marginTop: 5,
    marginLeft: 0
  },
  pageNumber: {
    fontSize:8,
    marginTop: 5,
  },
  printDateTime: {
    fontSize:8,
    marginTop: 5,
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
              <View style={styles.EmployeeInfoColThree}>
                <Text style={styles.EmpColLeftText}>Employee Category</Text>
              </View>
              <View style={styles.EmployeeInfoColFour}>
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
              <View style={styles.EmployeeInfoColThree}>
                <Text style={styles.EmpColLeftText}>Position</Text>
              </View>
              <View style={styles.EmployeeInfoColFour}>
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
              <View style={styles.EmployeeInfoColThree}>
                <Text style={styles.EmpColLeftText}>Status</Text>
              </View>
              <View style={styles.EmployeeInfoColFour}>
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
                <Text style={styles.EmpColRightText}>Back-End Development</Text>
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

          {/* Personal Information */}

          <View style={styles.Details}>
            <View style={styles.DetailsRow}>
              <Text style={styles.DetailsRowTextOne}>Jon Information</Text>
            </View>
            <View style={styles.EmployeeInfoRow}>
              <View style={styles.EmployeeInfoColOne}>
                <Text style={styles.EmpColLeftText}>Name</Text>
              </View>
              <View style={styles.EmployeeInfoColTwo}>
                <Text style={styles.EmpColRightText}>Abid Hasan Purno</Text>
              </View>
              <View style={styles.EmployeeInfoColThree}>
                <Text style={styles.EmpColLeftText}>Nick Name</Text>
              </View>
              <View style={styles.EmployeeInfoColFour}>
                <Text style={styles.EmpColRightText}>Abid</Text>
              </View>
            </View>


            <View style={styles.EmployeeInfoRow}>
              <View style={styles.EmployeeInfoColOne}>
                <Text style={styles.EmpColLeftText}>Father</Text>
              </View>
              <View style={styles.EmployeeInfoColTwo}>
                <Text style={styles.EmpColRightText}>M.A Jabber</Text>
              </View>
              <View style={styles.EmployeeInfoColThree}>
                <Text style={styles.EmpColLeftText}>Father profession</Text>
              </View>
              <View style={styles.EmployeeInfoColFour}>
                <Text style={styles.EmpColRightText}>Business</Text>
              </View>
            </View>

            <View style={styles.EmployeeInfoRow}>
              <View style={styles.EmployeeInfoColOne}>
                <Text style={styles.EmpColLeftText}>Shift</Text>
              </View>
              <View style={styles.EmployeeInfoColTwo}>
                <Text style={styles.EmpColRightText}>9AM-6PM</Text>
              </View>
              <View style={styles.EmployeeInfoColThree}>
                <Text style={styles.EmpColLeftText}>Status</Text>
              </View>
              <View style={styles.EmployeeInfoColFour}>
                <Text style={styles.EmpColLeftText}>ACTIVE</Text>
              </View>
            </View>
          </View>

          {/* Present Address and Permanent Address */}

          <View style={styles.Details}>
            <View style={styles.PresentRow}>
              <View style={styles.PresentColOne}>
                <Text style={styles.DetailsRowTextOne}>Present Address</Text>
              </View>
              <View style={styles.PresentColTwo}>
                <Text style={styles.DetailsRowTextOne}>Parmanent Address</Text>
              </View>
            </View>
            <View style={styles.EmployeeInfoRow}>
              <View style={styles.EmployeeInfoColOne}>
                <Text style={styles.EmpColLeftText}>District</Text>
              </View>
              <View style={styles.EmployeeInfoColTwo}>
                <Text style={styles.EmpColRightText}>Tangail</Text>
              </View>
              <View style={styles.EmployeeInfoColThree}>
                <Text style={styles.EmpColLeftText}>District</Text>
              </View>
              <View style={styles.EmployeeInfoColFour}>
                <Text style={styles.EmpColRightText}>Tangail</Text>
              </View>
            </View>


            <View style={styles.EmployeeInfoRow}>
              <View style={styles.EmployeeInfoColOne}>
                <Text style={styles.EmpColLeftText}>Police Station</Text>
              </View>
              <View style={styles.EmployeeInfoColTwo}>
                <Text style={styles.EmpColRightText}>Tangail Sadar</Text>
              </View>
              <View style={styles.EmployeeInfoColThree}>
                <Text style={styles.EmpColLeftText}>Police Station</Text>
              </View>
              <View style={styles.EmployeeInfoColFour}>
                <Text style={styles.EmpColRightText}>Tangail Sadar</Text>
              </View>
            </View>

            <View style={styles.EmployeeInfoRow}>
              <View style={styles.EmployeeInfoColOne}>
                <Text style={styles.EmpColLeftText}>Post Office</Text>
              </View>
              <View style={styles.EmployeeInfoColTwo}>
                <Text style={styles.EmpColRightText}>Tangail Sadar</Text>
              </View>
              <View style={styles.EmployeeInfoColThree}>
                <Text style={styles.EmpColLeftText}>Post Office</Text>
              </View>
              <View style={styles.EmployeeInfoColFour}>
                <Text style={styles.EmpColLeftText}>Tangail Sadar</Text>
              </View>
            </View>
            <View style={styles.EmployeeInfoRow}>
              <View style={styles.EmployeeInfoColOne}>
                <Text style={styles.EmpColLeftText}>Post Code</Text>
              </View>
              <View style={styles.EmployeeInfoColTwo}>
                <Text style={styles.EmpColRightText}>1900</Text>
              </View>
              <View style={styles.EmployeeInfoColThree}>
                <Text style={styles.EmpColLeftText}>Post Code</Text>
              </View>
              <View style={styles.EmployeeInfoColFour}>
                <Text style={styles.EmpColLeftText}>1900</Text>
              </View>
            </View>
          </View>

          {/* Education */}

          {/* <View style={styles.table}>
            <View style={styles.tableRow}>
             
              <View style={styles.tableCol}>
                <Text style={styles.headerText}> Group Joining Date</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.headerText}> Present Adress</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.headerText}> District</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.headerText}> Mobile</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.headerText}> Blood Group</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.headerText}> Grantor</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.headerText}> Nominee</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.headerText}> Reference</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.headerText}> Employee Category</Text>
              </View>
            </View>
            
              <View style={styles.tableRow}  wrap={false}
                pageBreak="avoid">
                <View style={styles.tableColTwo}>
                  <Text style={styles.headerTextTwo}> 1</Text>
                </View>
                <View style={styles.tableColTwo}>
                  <Text style={styles.headerTextTwo}> 51354</Text>
                </View>
                <View style={styles.tableColTwo}>
                  <Text style={styles.headerTextTwo}> Employee Category</Text>
                </View>
                <View style={styles.tableColTwo}>
                  <Text style={styles.headerTextTwo}> Rajib Hosen</Text>
                </View>
                <View style={styles.tableColTwo}>
                  <Text style={styles.headerTextTwo}> ##.##</Text>
                </View>
                <View style={styles.tableColTwo}>
                  <Text style={styles.headerTextTwo}> BBA</Text>
                </View>
                <View style={styles.tableColTwo}>
                  <Text style={styles.headerTextTwo}> </Text>
                </View>
                <View style={styles.tableColTwo}>
                  <Text style={styles.headerTextTwo}> Sales</Text>
                </View>
                <View style={styles.tableColTwo}>
                  <Text style={styles.headerTextTwo}> PSD</Text>
                </View>
              </View>
              <View style={styles.tableRow}  wrap={false}
                pageBreak="avoid">
                <View style={styles.tableColTwo}>
                  <Text style={styles.headerTextTwo}> 1</Text>
                </View>
                <View style={styles.tableColTwo}>
                  <Text style={styles.headerTextTwo}> 51354</Text>
                </View>
                <View style={styles.tableColTwo}>
                  <Text style={styles.headerTextTwo}> Employee Category</Text>
                </View>
                <View style={styles.tableColTwo}>
                  <Text style={styles.headerTextTwo}> Rajib Hosen</Text>
                </View>
                <View style={styles.tableColTwo}>
                  <Text style={styles.headerTextTwo}> ##.##</Text>
                </View>
                <View style={styles.tableColTwo}>
                  <Text style={styles.headerTextTwo}> BBA</Text>
                </View>
                <View style={styles.tableColTwo}>
                  <Text style={styles.headerTextTwo}> </Text>
                </View>
                <View style={styles.tableColTwo}>
                  <Text style={styles.headerTextTwo}> Sales</Text>
                </View>
                <View style={styles.tableColTwo}>
                  <Text style={styles.headerTextTwo}> PSD</Text>
                </View>
              </View>
           
          </View> */}


          <View style={styles.Educationtable}>
            <View style={styles.EducationtableRow}>
              <View style={styles.EducationtTableCol}>
                <Text style={styles.EducationtTextt}>Education</Text>
              </View>
            </View>

            <View style={styles.EducationtableRow}>
              <View style={styles.EducationtColTwo}>
                <Text style={styles.EducationtText}>Code</Text>
              </View>
              <View style={styles.EducationtColOne}>
                <Text style={styles.EducationtText}>Exam Name</Text>
              </View>
              <View style={styles.EducationtColOne}>
                <Text style={styles.EducationtText}>Gruop</Text>
              </View>
              <View style={styles.EducationtColOne}>
                <Text style={styles.EducationtText}>Board/University</Text>
              </View>
              <View style={styles.EducationtColOne}>
                <Text style={styles.EducationtText}>Institute Name</Text>
              </View>
              <View style={styles.EducationtColOne}>
                <Text style={styles.EducationtText}>Pass year</Text>
              </View>
              <View style={styles.EducationtColOne}>
                <Text style={styles.EducationtText}>Div/Class/GP</Text>
              </View>
              <View style={styles.EducationtColOne}>
                <Text style={styles.EducationtText}>Result</Text>
              </View>
              <View style={styles.EducationtColOne}>
                <Text style={styles.EducationtText}>Remarks</Text>
              </View>
            </View>
            <View style={styles.EducationtableRow}>
              <View style={styles.EducationtColFour}>
                <Text style={styles.EducationtText}>M-178072</Text>
              </View>
              <View style={styles.EducationtColThree}>
                <Text style={styles.EducationtText}>BSC in Engineering (Private)</Text>
              </View>
              <View style={styles.EducationtColThree}>
                <Text style={styles.EducationtText}>Computer Science And Engineering</Text>
              </View>
              <View style={styles.EducationtColThree}>
                <Text style={styles.EducationtText}></Text>
              </View>
              <View style={styles.EducationtColThree}>
                <Text style={styles.EducationtText}>Daffodil International University</Text>
              </View>
              <View style={styles.EducationtColThree}>
                <Text style={styles.EducationtText}>2022</Text>
              </View>
              <View style={styles.EducationtColThree}>
                <Text style={styles.EducationtText}>GPA/CGPA</Text>
              </View>
              <View style={styles.EducationtColThree}>
                <Text style={styles.EducationtText}>3.08 (4.00)</Text>
              </View>
              <View style={styles.EducationtColThree}>
                <Text style={styles.EducationtText}> </Text>
              </View>
            </View>

            <View style={styles.EducationtableRow}>
              <View style={styles.EducationtColFour}>
                <Text style={styles.EducationtText}>M-178070</Text>
              </View>
              <View style={styles.EducationtColThree}>
                <Text style={styles.EducationtText}>HSC Board</Text>
              </View>
              <View style={styles.EducationtColThree}>
                <Text style={styles.EducationtText}> Science </Text>
              </View>
              <View style={styles.EducationtColThree}>
                <Text style={styles.EducationtText}>Dhaka</Text>
              </View>
              <View style={styles.EducationtColThree}>
                <Text style={styles.EducationtText}>Sristy College Of Tangail</Text>
              </View>
              <View style={styles.EducationtColThree}>
                <Text style={styles.EducationtText}>2018</Text>
              </View>
              <View style={styles.EducationtColThree}>
                <Text style={styles.EducationtText}>GPA/CGPA</Text>
              </View>
              <View style={styles.EducationtColThree}>
                <Text style={styles.EducationtText}>3.50 (5.00)</Text>
              </View>
              <View style={styles.EducationtColThree}>
                <Text style={styles.EducationtText}> </Text>
              </View>
            </View>

            <View style={styles.EducationtableRow}>
              <View style={styles.EducationtColFour}>
                <Text style={styles.EducationtText}>M-178071</Text>
              </View>
              <View style={styles.EducationtColThree}>
                <Text style={styles.EducationtText}>SSC Board</Text>
              </View>
              <View style={styles.EducationtColThree}>
                <Text style={styles.EducationtText}> Science </Text>
              </View>
              <View style={styles.EducationtColThree}>
                <Text style={styles.EducationtText}>Dhaka</Text>
              </View>
              <View style={styles.EducationtColThree}>
                <Text style={styles.EducationtText}>Shaheen School Tangail</Text>
              </View>
              <View style={styles.EducationtColThree}>
                <Text style={styles.EducationtText}>2016</Text>
              </View>
              <View style={styles.EducationtColThree}>
                <Text style={styles.EducationtText}>GPA/CGPA</Text>
              </View>
              <View style={styles.EducationtColThree}>
                <Text style={styles.EducationtText}>4.67 (5.00)</Text>
              </View>
              <View style={styles.EducationtColThree}>
                <Text style={styles.EducationtText}> </Text>
              </View>
            </View>
          </View>
        </View>
        <Footer></Footer>
      </Page>
    </Document>
  )
}

const Footer = () => (
  <View style={styles.footer} fixed >
    <Text style={styles.footerText}>Design and developed by: Walton Group</Text>
    <Text style={styles.pageNumber} render={({ pageNumber, totalPages }) => ` ${pageNumber} / ${totalPages}`} />
    <Text style={styles.printDateTime}>Print Date and Time: Monday, 8 July 2024 11: 57: 44 AM</Text>
  </View>
)

export default MyApp
