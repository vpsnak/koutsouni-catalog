import React, {useState} from 'react'
import ExcelJS from 'exceljs'
import {Flex, Button} from '@chakra-ui/react'
import {useProductSearch} from '../../../hooks'

const GenerateCatalog = props => {
  const products = useProductSearch()
  const [loading, setLoading] = useState(false)
  const [blob, setBlob] = useState()

  const generate = () => {
    setLoading(true)
    const workbook = new ExcelJS.Workbook()
    workbook.creator = 'koutsouni.gr'
    workbook.lastModifiedBy = 'Koutsouni'
    workbook.created = new Date()
    workbook.modified = new Date()
    workbook.lastPrinted = new Date()
    const worksheet = workbook.addWorksheet('Koutsouni.gr B2B Catalog', {
    })
    worksheet.columns = [
      {header: 'Κωδικός', key: 'sku', width: 15},
      {header: 'Τίτλος', key: 'title', width: 70},
      {header: 'Κατηγορία', key: 'category', width: 20},
      {header: 'Τιμή Λιανικής', key: 'price', width: 20},
      {header: 'Τιμή Χονδρικής', key: 'b2b_price', width: 20}
    ]
    products.forEach(product => {
      const category = product.category.pop()
      if (product.variants.length) {
        product.variants.forEach(variant => {
          worksheet.addRow({...product, ...variant, category: category?.title.replace('&amp;','&'),  title: product.title + ' - Μέγεθος: ' + variant.size})
        })
      } else {
        worksheet.addRow({...product, category: category?.title.replace('&amp;','&')})
      }
    })
    workbook.xlsx.writeBuffer()
    .then(buffer => {
      const blob = new Blob([buffer], {type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'})
      setBlob(blob)
    }).finally(() => setTimeout(() => setLoading(false), 1000))
  }

  return <Flex {...props}>
    {(!blob || loading) && <Button variant={'outline'} colorScheme={'teal'} disabled={loading} onClick={generate}>{loading ? 'Δημιουργία Τιμοκαταλόγου...' : 'LIVE Τιμοκατάλογος Χονδρικής'}</Button>}
    {(blob && !loading) && <Button as={'a'} colorScheme={'teal'} href={URL.createObjectURL(blob)} download={'Koutsouni.gr Τιμοκατάλογος ' + (new Date()).toDateString() + '.xlsx'}>Αποθήκευση Τιμοκαταλόγου</Button>}
  </Flex>
}

export default GenerateCatalog