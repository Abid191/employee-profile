
import { Document, Image, Page, PDFViewer, StyleSheet, Text, View } from '@react-pdf/renderer'
import './App.css'


const styles = StyleSheet.create({
  page: {
    position: 'relative',
    paddingTop:20,
    paddingLeft:30,
    paddingRight:30,
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
    fontSize: 8,
    borderRight: 0,
  },
  EmpColRightText: {
    fontSize: 8,
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
    justifyContent: 'center',
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
  // Active - InActive History

  DocumentTableCol: {
    border: 'solid',
    justifyContent: 'center',
    borderWidth: 1,
    width: '100%',
    // height: 'auto',
    textAlign: 'center',
    padding: 5,
    borderTopWidth: 0,
    backgroundColor: '#F2F7F3',
  },
  footer: {
    flexDirection: 'row',
    position: 'absolute',
    display: 'block',
    bottom: 70,
    borderTop: ' 1px solid black',
    width: '100%',
    fontSize: 10,
    justifyContent: 'space-between',
    // marginTop: 20,
    marginLeft: 30,
  },
  footerText: {
    fontSize: 8,
    marginTop: 5,
    marginLeft: 0
  },
  pageNumber: {
    fontSize: 8,
    marginTop: 5,
  },
  printDateTime: {
    fontSize: 8,
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
              <Text style={styles.DetailsRowTextOne}>Personal Information</Text>
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
                <Text style={styles.EmpColLeftText}>Active</Text>
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
                <Text style={styles.EducationtText}> </Text>
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

          {/* Present Leave Status */}

          <View style={styles.Educationtable} wrap={false}
            pageBreak="avoid">
            <View style={styles.EducationtableRow}>
              <View style={styles.EducationtTableCol}>
                <Text style={styles.EducationtTextt}>Present Leave Status</Text>
              </View>
            </View>

            <View style={styles.EducationtableRow}>
              <View style={styles.EducationtColTwo}>
                <Text style={styles.EducationtText}>Type of Leave</Text>
              </View>
              <View style={styles.EducationtColOne}>
                <Text style={styles.EducationtText}>Define</Text>
              </View>
              <View style={styles.EducationtColOne}>
                <Text style={styles.EducationtText}>Leave Taken</Text>
              </View>
              <View style={styles.EducationtColOne}>
                <Text style={styles.EducationtText}>Processing</Text>
              </View>
              <View style={styles.EducationtColOne}>
                <Text style={styles.EducationtText}>Remain</Text>
              </View>
            </View>

            <View style={styles.EducationtableRow}>
              <View style={styles.EducationtColFour}>
                <Text style={styles.EducationtText}>LEAVE_CL</Text>
              </View>
              <View style={styles.EducationtColThree}>
                <Text style={styles.EducationtText}>3</Text>
              </View>
              <View style={styles.EducationtColThree}>
                <Text style={styles.EducationtText}>0</Text>
              </View>
              <View style={styles.EducationtColThree}>
                <Text style={styles.EducationtText}>1</Text>
              </View>
              <View style={styles.EducationtColThree}>
                <Text style={styles.EducationtText}>3</Text>
              </View>
            </View>

            <View style={styles.EducationtableRow}>
              <View style={styles.EducationtColFour}>
                <Text style={styles.EducationtText}>LEAVE_ML</Text>
              </View>
              <View style={styles.EducationtColThree}>
                <Text style={styles.EducationtText}>3</Text>
              </View>
              <View style={styles.EducationtColThree}>
                <Text style={styles.EducationtText}>1</Text>
              </View>
              <View style={styles.EducationtColThree}>
                <Text style={styles.EducationtText}>1</Text>
              </View>
              <View style={styles.EducationtColThree}>
                <Text style={styles.EducationtText}>2</Text>
              </View>
            </View>

            <View style={styles.EducationtableRow}>
              <View style={styles.EducationtColFour}>
                <Text style={styles.EducationtText}>LEAVE_WOPL</Text>
              </View>
              <View style={styles.EducationtColThree}>
                <Text style={styles.EducationtText}>100</Text>
              </View>
              <View style={styles.EducationtColThree}>
                <Text style={styles.EducationtText}> 0 </Text>
              </View>
              <View style={styles.EducationtColThree}>
                <Text style={styles.EducationtText}>0</Text>
              </View>
              <View style={styles.EducationtColThree}>
                <Text style={styles.EducationtText}>100</Text>
              </View>
            </View>

            <View style={styles.EducationtableRow}>
              <View style={styles.EducationtColFour}>
                <Text style={styles.EducationtText}>LEAVE_SLWP</Text>
              </View>
              <View style={styles.EducationtColThree}>
                <Text style={styles.EducationtText}>25</Text>
              </View>
              <View style={styles.EducationtColThree}>
                <Text style={styles.EducationtText}> 3 </Text>
              </View>
              <View style={styles.EducationtColThree}>
                <Text style={styles.EducationtText}>0</Text>
              </View>
              <View style={styles.EducationtColThree}>
                <Text style={styles.EducationtText}>22</Text>
              </View>
            </View>
          </View>

          {/* Bank Account */}

          <View style={styles.Educationtable} wrap={false}
            pageBreak="avoid">
            <View style={styles.EducationtableRow}>
              <View style={styles.EducationtTableCol}>
                <Text style={styles.EducationtTextt}>Bank Account</Text>
              </View>
            </View>

            <View style={styles.EducationtableRow}>
              <View style={styles.EducationtColTwo}>
                <Text style={styles.EducationtText}>Sl No</Text>
              </View>
              <View style={styles.EducationtColOne}>
                <Text style={styles.EducationtText}>Bank</Text>
              </View>
              <View style={styles.EducationtColOne}>
                <Text style={styles.EducationtText}>Account No</Text>
              </View>
              <View style={styles.EducationtColOne}>
                <Text style={styles.EducationtText}>Salary</Text>
              </View>
            </View>

            <View style={styles.EducationtableRow}>
              <View style={styles.EducationtColFour}>
                <Text style={styles.EducationtText}>1</Text>
              </View>
              <View style={styles.EducationtColThree}>
                <Text style={styles.EducationtText}>Dutch-Bangla Bank Limited</Text>
              </View>
              <View style={styles.EducationtColThree}>
                <Text style={styles.EducationtText}>196.158.93337</Text>
              </View>
              <View style={styles.EducationtColThree}>
                <Text style={styles.EducationtText}>15000</Text>
              </View>
            </View>
          </View>

          {/* Gear Ups & Down */}

          <View style={styles.Educationtable} wrap={false}
            pageBreak="avoid">
            <View style={styles.EducationtableRow}>
              <View style={styles.EducationtTableCol}>
                <Text style={styles.EducationtTextt}>Gear Ups & Down</Text>
              </View>
            </View>

            <View style={styles.EducationtableRow}>
              <View style={styles.EducationtColTwo}>
                <Text style={styles.EducationtText}>Code</Text>
              </View>
              <View style={styles.EducationtColOne}>
                <Text style={styles.EducationtText}>Type</Text>
              </View>
              <View style={styles.EducationtColOne}>
                <Text style={styles.EducationtText}>Salary History</Text>
              </View>
              <View style={styles.EducationtColOne}>
                <Text style={styles.EducationtText}>Position</Text>
              </View>
              <View style={styles.EducationtColOne}>
                <Text style={styles.EducationtText}>Payroll Effect</Text>
              </View>
              <View style={styles.EducationtColOne}>
                <Text style={styles.EducationtText}>Effect Date</Text>
              </View>
            </View>

            <View style={styles.EducationtableRow}>
              <View style={styles.EducationtColFour}>
                <Text style={styles.EducationtText}>RA-0771008</Text>
              </View>
              <View style={styles.EducationtColThree}>
                <Text style={styles.EducationtText}>JOIN</Text>
              </View>
              <View style={styles.EducationtColThree}>
                <Text style={styles.EducationtText}>##.##</Text>
              </View>
              <View style={styles.EducationtColThree}>
                <Text style={styles.EducationtText}>WDTIL.Computer.ICT.Commercial Operations.Bench
                  Education.Core Development.Intern</Text>
              </View>
              <View style={styles.EducationtColThree}>
                <Text style={styles.EducationtText}>01-Jun-2024</Text>
              </View>
              <View style={styles.EducationtColThree}>
                <Text style={styles.EducationtText}>01-Jun-2024</Text>
              </View>
            </View>
          </View>

          {/* Active - InActive History */}

          <View style={styles.Educationtable} wrap={false}
            pageBreak="avoid">
            <View style={styles.EducationtableRow}>
              <View style={styles.EducationtTableCol}>
                <Text style={styles.EducationtTextt}>Active - InActive History</Text>
              </View>
            </View>

            <View style={styles.EducationtableRow}>
              <View style={styles.EducationtColTwo}>
                <Text style={styles.EducationtText}>Start Date</Text>
              </View>
              <View style={styles.EducationtColOne}>
                <Text style={styles.EducationtText}>End Date</Text>
              </View>
              <View style={styles.EducationtColOne}>
                <Text style={styles.EducationtText}>InActive Date</Text>
              </View>
              <View style={styles.EducationtColOne}>
                <Text style={styles.EducationtText}>InActive By</Text>
              </View>
              <View style={styles.EducationtColOne}>
                <Text style={styles.EducationtText}>InActive</Text>
              </View>
              <View style={styles.EducationtColOne}>
                <Text style={styles.EducationtText}>Active Date</Text>
              </View>
              <View style={styles.EducationtColOne}>
                <Text style={styles.EducationtText}>Active Reason</Text>
              </View>
              <View style={styles.EducationtColOne}>
                <Text style={styles.EducationtText}>Active - InActive History</Text>
              </View>
            </View>

            <View style={styles.EducationtableRow}>
              <View style={styles.EducationtColFour}>
                <Text style={styles.EducationtText}>##-##</Text>
              </View>
              <View style={styles.EducationtColThree}>
                <Text style={styles.EducationtText}>##-##</Text>
              </View>
              <View style={styles.EducationtColThree}>
                <Text style={styles.EducationtText}>##-##</Text>
              </View>
              <View style={styles.EducationtColThree}>
                <Text style={styles.EducationtText}>##-## </Text>
              </View>
              <View style={styles.EducationtColThree}>
                <Text style={styles.EducationtText}>##-##</Text>
              </View>
              <View style={styles.EducationtColThree}>
                <Text style={styles.EducationtText}>##-##</Text>
              </View>
              <View style={styles.EducationtColThree}>
                <Text style={styles.EducationtText}>##-##</Text>
              </View>
              <View style={styles.EducationtColThree}>
                <Text style={styles.EducationtText}>##-##</Text>
              </View>
            </View>
            <View style={styles.EducationtableRow}>
              <View style={styles.EducationtColFour}>
                <Text style={styles.EducationtText}>##-##</Text>
              </View>
              <View style={styles.EducationtColThree}>
                <Text style={styles.EducationtText}>##-##</Text>
              </View>
              <View style={styles.EducationtColThree}>
                <Text style={styles.EducationtText}>##-##</Text>
              </View>
              <View style={styles.EducationtColThree}>
                <Text style={styles.EducationtText}>##-## </Text>
              </View>
              <View style={styles.EducationtColThree}>
                <Text style={styles.EducationtText}>##-##</Text>
              </View>
              <View style={styles.EducationtColThree}>
                <Text style={styles.EducationtText}>##-##</Text>
              </View>
              <View style={styles.EducationtColThree}>
                <Text style={styles.EducationtText}>##-##</Text>
              </View>
              <View style={styles.EducationtColThree}>
                <Text style={styles.EducationtText}>##-##</Text>
              </View>
            </View>
            <View style={styles.EducationtableRow}>
              <View style={styles.EducationtColFour}>
                <Text style={styles.EducationtText}>##-##</Text>
              </View>
              <View style={styles.EducationtColThree}>
                <Text style={styles.EducationtText}>##-##</Text>
              </View>
              <View style={styles.EducationtColThree}>
                <Text style={styles.EducationtText}>##-##</Text>
              </View>
              <View style={styles.EducationtColThree}>
                <Text style={styles.EducationtText}>##-## </Text>
              </View>
              <View style={styles.EducationtColThree}>
                <Text style={styles.EducationtText}>##-##</Text>
              </View>
              <View style={styles.EducationtColThree}>
                <Text style={styles.EducationtText}>##-##</Text>
              </View>
              <View style={styles.EducationtColThree}>
                <Text style={styles.EducationtText}>##-##</Text>
              </View>
              <View style={styles.EducationtColThree}>
                <Text style={styles.EducationtText}>##-##</Text>
              </View>
            </View>
            <View style={styles.EducationtableRow}>
              <View style={styles.EducationtColFour}>
                <Text style={styles.EducationtText}>##-##</Text>
              </View>
              <View style={styles.EducationtColThree}>
                <Text style={styles.EducationtText}>##-##</Text>
              </View>
              <View style={styles.EducationtColThree}>
                <Text style={styles.EducationtText}>##-##</Text>
              </View>
              <View style={styles.EducationtColThree}>
                <Text style={styles.EducationtText}>##-## </Text>
              </View>
              <View style={styles.EducationtColThree}>
                <Text style={styles.EducationtText}>##-##</Text>
              </View>
              <View style={styles.EducationtColThree}>
                <Text style={styles.EducationtText}>##-##</Text>
              </View>
              <View style={styles.EducationtColThree}>
                <Text style={styles.EducationtText}>##-##</Text>
              </View>
              <View style={styles.EducationtColThree}>
                <Text style={styles.EducationtText}>##-##</Text>
              </View>
            </View>
            <View style={styles.EducationtableRow}>
              <View style={styles.EducationtColFour}>
                <Text style={styles.EducationtText}>##-##</Text>
              </View>
              <View style={styles.EducationtColThree}>
                <Text style={styles.EducationtText}>##-##</Text>
              </View>
              <View style={styles.EducationtColThree}>
                <Text style={styles.EducationtText}>##-##</Text>
              </View>
              <View style={styles.EducationtColThree}>
                <Text style={styles.EducationtText}>##-## </Text>
              </View>
              <View style={styles.EducationtColThree}>
                <Text style={styles.EducationtText}>##-##</Text>
              </View>
              <View style={styles.EducationtColThree}>
                <Text style={styles.EducationtText}>##-##</Text>
              </View>
              <View style={styles.EducationtColThree}>
                <Text style={styles.EducationtText}>##-##</Text>
              </View>
              <View style={styles.EducationtColThree}>
                <Text style={styles.EducationtText}>##-##</Text>
              </View>
            </View>
          </View>

          {/* Attendance Details (last 10 days) */}

          <View style={styles.Educationtable} wrap={false}
            pageBreak="avoid">
            <View style={styles.EducationtableRow}>
              <View style={styles.EducationtTableCol}>
                <Text style={styles.EducationtTextt}>Attendance Details (last 10 days)</Text>
              </View>
            </View>

            <View style={styles.EducationtableRow}>
              <View style={styles.EducationtColTwo}>
                <Text style={styles.EducationtText}>Sl No.</Text>
              </View>
              <View style={styles.EducationtColOne}>
                <Text style={styles.EducationtText}>Employee Id</Text>
              </View>
              <View style={styles.EducationtColOne}>
                <Text style={styles.EducationtText}>Punch Date</Text>
              </View>
              <View style={styles.EducationtColOne}>
                <Text style={styles.EducationtText}>Punch Day</Text>
              </View>
              <View style={styles.EducationtColOne}>
                <Text style={styles.EducationtText}>Shift</Text>
              </View>
              <View style={styles.EducationtColOne}>
                <Text style={styles.EducationtText}>In Time</Text>
              </View>
              <View style={styles.EducationtColOne}>
                <Text style={styles.EducationtText}>Out Time</Text>
              </View>
              <View style={styles.EducationtColOne}>
                <Text style={styles.EducationtText}>Status</Text>
              </View>
            </View>

            <View style={styles.EducationtableRow}>
              <View style={styles.EducationtColFour}>
                <Text style={styles.EducationtText}>1</Text>
              </View>
              <View style={styles.EducationtColThree}>
                <Text style={styles.EducationtText}>I-480</Text>
              </View>
              <View style={styles.EducationtColThree}>
                <Text style={styles.EducationtText}>29-Jul-2024</Text>
              </View>
              <View style={styles.EducationtColThree}>
                <Text style={styles.EducationtText}>MONDAY</Text>
              </View>
              <View style={styles.EducationtColThree}>
                <Text style={styles.EducationtText}>9AM-6PM</Text>
              </View>
              <View style={styles.EducationtColThree}>
                <Text style={styles.EducationtText}>9AM-6PM</Text>
              </View>
              <View style={styles.EducationtColThree}>
                <Text style={styles.EducationtText}>9:42:46 AM</Text>
              </View>
              <View style={styles.EducationtColThree}>
                <Text style={styles.EducationtText}>3Present</Text>
              </View>
            </View>
            <View style={styles.EducationtableRow}>
              <View style={styles.EducationtColFour}>
                <Text style={styles.EducationtText}>1</Text>
              </View>
              <View style={styles.EducationtColThree}>
                <Text style={styles.EducationtText}>I-480</Text>
              </View>
              <View style={styles.EducationtColThree}>
                <Text style={styles.EducationtText}>29-Jul-2024</Text>
              </View>
              <View style={styles.EducationtColThree}>
                <Text style={styles.EducationtText}>MONDAY</Text>
              </View>
              <View style={styles.EducationtColThree}>
                <Text style={styles.EducationtText}>9AM-6PM</Text>
              </View>
              <View style={styles.EducationtColThree}>
                <Text style={styles.EducationtText}>9AM-6PM</Text>
              </View>
              <View style={styles.EducationtColThree}>
                <Text style={styles.EducationtText}>9:42:46 AM</Text>
              </View>
              <View style={styles.EducationtColThree}>
                <Text style={styles.EducationtText}>3Present</Text>
              </View>
            </View>
            <View style={styles.EducationtableRow}>
              <View style={styles.EducationtColFour}>
                <Text style={styles.EducationtText}>1</Text>
              </View>
              <View style={styles.EducationtColThree}>
                <Text style={styles.EducationtText}>I-480</Text>
              </View>
              <View style={styles.EducationtColThree}>
                <Text style={styles.EducationtText}>29-Jul-2024</Text>
              </View>
              <View style={styles.EducationtColThree}>
                <Text style={styles.EducationtText}>MONDAY</Text>
              </View>
              <View style={styles.EducationtColThree}>
                <Text style={styles.EducationtText}>9AM-6PM</Text>
              </View>
              <View style={styles.EducationtColThree}>
                <Text style={styles.EducationtText}>9AM-6PM</Text>
              </View>
              <View style={styles.EducationtColThree}>
                <Text style={styles.EducationtText}>9:42:46 AM</Text>
              </View>
              <View style={styles.EducationtColThree}>
                <Text style={styles.EducationtText}>3Present</Text>
              </View>
            </View>
            <View style={styles.EducationtableRow}>
              <View style={styles.EducationtColFour}>
                <Text style={styles.EducationtText}>1</Text>
              </View>
              <View style={styles.EducationtColThree}>
                <Text style={styles.EducationtText}>I-480</Text>
              </View>
              <View style={styles.EducationtColThree}>
                <Text style={styles.EducationtText}>29-Jul-2024</Text>
              </View>
              <View style={styles.EducationtColThree}>
                <Text style={styles.EducationtText}>MONDAY</Text>
              </View>
              <View style={styles.EducationtColThree}>
                <Text style={styles.EducationtText}>9AM-6PM</Text>
              </View>
              <View style={styles.EducationtColThree}>
                <Text style={styles.EducationtText}>9AM-6PM</Text>
              </View>
              <View style={styles.EducationtColThree}>
                <Text style={styles.EducationtText}>9:42:46 AM</Text>
              </View>
              <View style={styles.EducationtColThree}>
                <Text style={styles.EducationtText}>3Present</Text>
              </View>
            </View>
            <View style={styles.EducationtableRow}>
              <View style={styles.EducationtColFour}>
                <Text style={styles.EducationtText}>1</Text>
              </View>
              <View style={styles.EducationtColThree}>
                <Text style={styles.EducationtText}>I-480</Text>
              </View>
              <View style={styles.EducationtColThree}>
                <Text style={styles.EducationtText}>29-Jul-2024</Text>
              </View>
              <View style={styles.EducationtColThree}>
                <Text style={styles.EducationtText}>MONDAY</Text>
              </View>
              <View style={styles.EducationtColThree}>
                <Text style={styles.EducationtText}>9AM-6PM</Text>
              </View>
              <View style={styles.EducationtColThree}>
                <Text style={styles.EducationtText}>9AM-6PM</Text>
              </View>
              <View style={styles.EducationtColThree}>
                <Text style={styles.EducationtText}>9:42:46 AM</Text>
              </View>
              <View style={styles.EducationtColThree}>
                <Text style={styles.EducationtText}>3Present</Text>
              </View>
            </View>
            <View style={styles.EducationtableRow}>
              <View style={styles.EducationtColFour}>
                <Text style={styles.EducationtText}>1</Text>
              </View>
              <View style={styles.EducationtColThree}>
                <Text style={styles.EducationtText}>I-480</Text>
              </View>
              <View style={styles.EducationtColThree}>
                <Text style={styles.EducationtText}>29-Jul-2024</Text>
              </View>
              <View style={styles.EducationtColThree}>
                <Text style={styles.EducationtText}>MONDAY</Text>
              </View>
              <View style={styles.EducationtColThree}>
                <Text style={styles.EducationtText}>9AM-6PM</Text>
              </View>
              <View style={styles.EducationtColThree}>
                <Text style={styles.EducationtText}>9AM-6PM</Text>
              </View>
              <View style={styles.EducationtColThree}>
                <Text style={styles.EducationtText}>9:42:46 AM</Text>
              </View>
              <View style={styles.EducationtColThree}>
                <Text style={styles.EducationtText}>3Present</Text>
              </View>
            </View>
            <View style={styles.EducationtableRow}>
              <View style={styles.EducationtColFour}>
                <Text style={styles.EducationtText}>1</Text>
              </View>
              <View style={styles.EducationtColThree}>
                <Text style={styles.EducationtText}>I-480</Text>
              </View>
              <View style={styles.EducationtColThree}>
                <Text style={styles.EducationtText}>29-Jul-2024</Text>
              </View>
              <View style={styles.EducationtColThree}>
                <Text style={styles.EducationtText}>MONDAY</Text>
              </View>
              <View style={styles.EducationtColThree}>
                <Text style={styles.EducationtText}>9AM-6PM</Text>
              </View>
              <View style={styles.EducationtColThree}>
                <Text style={styles.EducationtText}>9AM-6PM</Text>
              </View>
              <View style={styles.EducationtColThree}>
                <Text style={styles.EducationtText}>9:42:46 AM</Text>
              </View>
              <View style={styles.EducationtColThree}>
                <Text style={styles.EducationtText}>3Present</Text>
              </View>
            </View>
            <View style={styles.EducationtableRow}>
              <View style={styles.EducationtColFour}>
                <Text style={styles.EducationtText}>1</Text>
              </View>
              <View style={styles.EducationtColThree}>
                <Text style={styles.EducationtText}>I-480</Text>
              </View>
              <View style={styles.EducationtColThree}>
                <Text style={styles.EducationtText}>29-Jul-2024</Text>
              </View>
              <View style={styles.EducationtColThree}>
                <Text style={styles.EducationtText}>MONDAY</Text>
              </View>
              <View style={styles.EducationtColThree}>
                <Text style={styles.EducationtText}>9AM-6PM</Text>
              </View>
              <View style={styles.EducationtColThree}>
                <Text style={styles.EducationtText}>9AM-6PM</Text>
              </View>
              <View style={styles.EducationtColThree}>
                <Text style={styles.EducationtText}>9:42:46 AM</Text>
              </View>
              <View style={styles.EducationtColThree}>
                <Text style={styles.EducationtText}>3Present</Text>
              </View>
            </View>
            <View style={styles.EducationtableRow}>
              <View style={styles.EducationtColFour}>
                <Text style={styles.EducationtText}>1</Text>
              </View>
              <View style={styles.EducationtColThree}>
                <Text style={styles.EducationtText}>I-480</Text>
              </View>
              <View style={styles.EducationtColThree}>
                <Text style={styles.EducationtText}>29-Jul-2024</Text>
              </View>
              <View style={styles.EducationtColThree}>
                <Text style={styles.EducationtText}>MONDAY</Text>
              </View>
              <View style={styles.EducationtColThree}>
                <Text style={styles.EducationtText}>9AM-6PM</Text>
              </View>
              <View style={styles.EducationtColThree}>
                <Text style={styles.EducationtText}>9AM-6PM</Text>
              </View>
              <View style={styles.EducationtColThree}>
                <Text style={styles.EducationtText}>9:42:46 AM</Text>
              </View>
              <View style={styles.EducationtColThree}>
                <Text style={styles.EducationtText}>3Present</Text>
              </View>
            </View>
            <View style={styles.EducationtableRow}>
              <View style={styles.EducationtColFour}>
                <Text style={styles.EducationtText}>1</Text>
              </View>
              <View style={styles.EducationtColThree}>
                <Text style={styles.EducationtText}>I-480</Text>
              </View>
              <View style={styles.EducationtColThree}>
                <Text style={styles.EducationtText}>29-Jul-2024</Text>
              </View>
              <View style={styles.EducationtColThree}>
                <Text style={styles.EducationtText}>MONDAY</Text>
              </View>
              <View style={styles.EducationtColThree}>
                <Text style={styles.EducationtText}>9AM-6PM</Text>
              </View>
              <View style={styles.EducationtColThree}>
                <Text style={styles.EducationtText}>9AM-6PM</Text>
              </View>
              <View style={styles.EducationtColThree}>
                <Text style={styles.EducationtText}>9:42:46 AM</Text>
              </View>
              <View style={styles.EducationtColThree}>
                <Text style={styles.EducationtText}>3Present</Text>
              </View>
            </View>


          </View>

          {/* Personal Information */}

          <View style={styles.Details} wrap={false}
            pageBreak="avoid">
            <View style={styles.DetailsRow}>
              <Text style={styles.DetailsRowTextOne}>Personal Information</Text>
            </View>
            <View style={styles.EmployeeInfoRow}>
              <View style={styles.EmployeeInfoColOne}>
                <Text style={styles.EmpColLeftText}>Date of Birth</Text>
              </View>
              <View style={styles.EmployeeInfoColTwo}>
                <Text style={styles.EmpColRightText}>13-Sep-2000 ( 23 years 10 mons 16 days )</Text>
              </View>
              <View style={styles.EmployeeInfoColThree}>
                <Text style={styles.EmpColLeftText}>Blood Group</Text>
              </View>
              <View style={styles.EmployeeInfoColFour}>
                <Text style={styles.EmpColRightText}>A+</Text>
              </View>
            </View>

            <View style={styles.EmployeeInfoRow}>
              <View style={styles.EmployeeInfoColOne}>
                <Text style={styles.EmpColLeftText}>Height</Text>
              </View>
              <View style={styles.EmployeeInfoColTwo}>
                <Text style={styles.EmpColRightText}>5.0 feet 3.0 inches</Text>
              </View>
              <View style={styles.EmployeeInfoColThree}>
                <Text style={styles.EmpColLeftText}>Weight (Kg)</Text>
              </View>
              <View style={styles.EmployeeInfoColFour}>
                <Text style={styles.EmpColRightText}>62.0</Text>
              </View>
            </View>

            <View style={styles.EmployeeInfoRow}>
              <View style={styles.EmployeeInfoColOne}>
                <Text style={styles.EmpColLeftText}>Gender</Text>
              </View>
              <View style={styles.EmployeeInfoColTwo}>
                <Text style={styles.EmpColRightText}>Male</Text>
              </View>
              <View style={styles.EmployeeInfoColThree}>
                <Text style={styles.EmpColLeftText}>National ID No</Text>
              </View>
              <View style={styles.EmployeeInfoColFour}>
                <Text style={styles.EmpColLeftText}>1958691246</Text>
              </View>
            </View>

            <View style={styles.EmployeeInfoRow}>
              <View style={styles.EmployeeInfoColOne}>
                <Text style={styles.EmpColLeftText}>Religion</Text>
              </View>
              <View style={styles.EmployeeInfoColTwo}>
                <Text style={styles.EmpColRightText}>Islam</Text>
              </View>
              <View style={styles.EmployeeInfoColThree}>
                <Text style={styles.EmpColLeftText}>Disability Status</Text>
              </View>
              <View style={styles.EmployeeInfoColFour}>
                <Text style={styles.EmpColLeftText}> </Text>
              </View>
            </View>

            <View style={styles.EmployeeInfoRow}>
              <View style={styles.EmployeeInfoColOne}>
                <Text style={styles.EmpColLeftText}>Mobile</Text>
              </View>
              <View style={styles.EmployeeInfoColTwo}>
                <Text style={styles.EmpColRightText}> </Text>
              </View>
              <View style={styles.EmployeeInfoColThree}>
                <Text style={styles.EmpColLeftText}>Nationality</Text>
              </View>
              <View style={styles.EmployeeInfoColFour}>
                <Text style={styles.EmpColLeftText}> </Text>
              </View>
            </View>

            <View style={styles.EmployeeInfoRow}>
              <View style={styles.EmployeeInfoColOne}>
                <Text style={styles.EmpColLeftText}>Altenate Mobile</Text>
              </View>
              <View style={styles.EmployeeInfoColTwo}>
                <Text style={styles.EmpColRightText}> </Text>
              </View>
              <View style={styles.EmployeeInfoColThree}>
                <Text style={styles.EmpColLeftText}>Email</Text>
              </View>
              <View style={styles.EmployeeInfoColFour}>
                <Text style={styles.EmpColLeftText}> </Text>
              </View>
            </View>

            <View style={styles.EmployeeInfoRow}>
              <View style={styles.EmployeeInfoColOne}>
                <Text style={styles.EmpColLeftText}>Marital Status</Text>
              </View>
              <View style={styles.EmployeeInfoColTwo}>
                <Text style={styles.EmpColRightText}> </Text>
              </View>
              <View style={styles.EmployeeInfoColThree}>
                <Text style={styles.EmpColLeftText}>Alternate Email</Text>
              </View>
              <View style={styles.EmployeeInfoColFour}>
                <Text style={styles.EmpColLeftText}> </Text>
              </View>
            </View>

            <View style={styles.EmployeeInfoRow}>
              <View style={styles.EmployeeInfoColOne}>
                <Text style={styles.EmpColLeftText}>Spouse name</Text>
              </View>
              <View style={styles.EmployeeInfoColTwo}>
                <Text style={styles.EmpColRightText}> </Text>
              </View>
              <View style={styles.EmployeeInfoColThree}>
                <Text style={styles.EmpColLeftText}>Medical Test Result</Text>
              </View>
              <View style={styles.EmployeeInfoColFour}>
                <Text style={styles.EmpColLeftText}> </Text>
              </View>
            </View>

            <View style={styles.EmployeeInfoRow}>
              <View style={styles.EmployeeInfoColOne}>
                <Text style={styles.EmpColLeftText}>Spouse Education</Text>
              </View>
              <View style={styles.EmployeeInfoColTwo}>
                <Text style={styles.EmpColRightText}> </Text>
              </View>
              <View style={styles.EmployeeInfoColThree}>
                <Text style={styles.EmpColLeftText}>TIN No</Text>
              </View>
              <View style={styles.EmployeeInfoColFour}>
                <Text style={styles.EmpColLeftText}> </Text>
              </View>
            </View>

            <View style={styles.EmployeeInfoRow}>
              <View style={styles.EmployeeInfoColOne}>
                <Text style={styles.EmpColLeftText}>Spouse Date of Birth</Text>
              </View>
              <View style={styles.EmployeeInfoColTwo}>
                <Text style={styles.EmpColRightText}> </Text>
              </View>
              <View style={styles.EmployeeInfoColThree}>
                <Text style={styles.EmpColLeftText}>No. of Children</Text>
              </View>
              <View style={styles.EmployeeInfoColFour}>
                <Text style={styles.EmpColLeftText}> </Text>
              </View>
            </View>

            <View style={styles.EmployeeInfoRow}>
              <View style={styles.EmployeeInfoColOne}>
                <Text style={styles.EmpColLeftText}>Vacancy Requisition Code</Text>
              </View>
              <View style={styles.EmployeeInfoColTwo}>
                <Text style={styles.EmpColRightText}> </Text>
              </View>
              <View style={styles.EmployeeInfoColThree}>
                <Text style={styles.EmpColLeftText}>Name (Child-1)</Text>
              </View>
              <View style={styles.EmployeeInfoColFour}>
                <Text style={styles.EmpColLeftText}> </Text>
              </View>
            </View>

            <View style={styles.EmployeeInfoRow}>
              <View style={styles.EmployeeInfoColOne}>
                <Text style={styles.EmpColLeftText}>Honourable Management</Text>
              </View>
              <View style={styles.EmployeeInfoColTwo}>
                <Text style={styles.EmpColRightText}> </Text>
              </View>
              <View style={styles.EmployeeInfoColThree}>
                <Text style={styles.EmpColLeftText}>Name (Child-2)</Text>
              </View>
              <View style={styles.EmployeeInfoColFour}>
                <Text style={styles.EmpColLeftText}> </Text>
              </View>
            </View>

            <View style={styles.EmployeeInfoRow}>
              <View style={styles.EmployeeInfoColOne}>
                <Text style={styles.EmpColLeftText}>File Located In</Text>
              </View>
              <View style={styles.EmployeeInfoColTwo}>
                <Text style={styles.EmpColRightText}> </Text>
              </View>
              <View style={styles.EmployeeInfoColThree}>
                <Text style={styles.EmpColLeftText}>Attachment(deed, cheque,
                  others)</Text>
              </View>
              <View style={styles.EmployeeInfoColFour}>
                <Text style={styles.EmpColLeftText}> </Text>
              </View>
            </View>

            <View style={styles.EmployeeInfoRow}>
              <View style={styles.EmployeeInfoColOne}>
                <Text style={styles.EmpColLeftText}>Documented By</Text>
              </View>
              <View style={styles.EmployeeInfoColTwo}>
                <Text style={styles.EmpColRightText}> </Text>
              </View>
              <View style={styles.EmployeeInfoColThree}>
                <Text style={styles.EmpColLeftText}>Attachment(Emp Signature)</Text>
              </View>
              <View style={styles.EmployeeInfoColFour}>
                <Text style={styles.EmpColLeftText}> </Text>
              </View>
            </View>
            <View style={styles.EmployeeInfoRow}>
              <View style={styles.EmployeeInfoColOne}>
                <Text style={styles.EmpColLeftText}>Identification Mark</Text>
              </View>
              <View style={styles.EmployeeInfoColTwo}>
                <Text style={styles.EmpColRightText}> </Text>
              </View>
              <View style={styles.EmployeeInfoColThree}>
                <Text style={styles.EmpColLeftText}>Attachment EMP Resume</Text>
              </View>
              <View style={styles.EmployeeInfoColFour}>
                <Text style={styles.EmpColLeftText}> </Text>
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
