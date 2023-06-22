const { json } = require('express');
const getIntelisis = require('../intelisis/getRequest');

exports.getProducts =async(req,res)=>{
  try {
    const  { ArticuloD, ArticuloA, AlmacenD, AlmacenA, ListaPrecio, Moneda} = req.body;
    let productUrl= "/Articulos";
    bodyParams={
      ArticuloD: ArticuloD,
      ArticuloA: ArticuloA,
      AlmacenD: AlmacenD,
      AlmacenA: AlmacenA,
      ListaPrecio: ListaPrecio,
      Moneda: Moneda
    }
    await getIntelisis.requestIntelisis(productUrl, bodyParams).then(data =>{
      if(!data.Message){
        return res.json(data);
      }
      return res.status(402).json(data);
    }); 
  } catch (error) {
    console.log(error);
  }
} 

exports.getInventory =async(req,res)=>{
  try {
    const  { ArticuloD, ArticuloA, AlmacenD, AlmacenA, ListaPrecio, Moneda} = req.body;
    let productUrl= "/Inventario";
    bodyParams={
      ArticuloD: ArticuloD,
      ArticuloA: ArticuloA,
      AlmacenD: AlmacenD,
      AlmacenA: AlmacenA,
      ListaPrecio: ListaPrecio,
      Moneda: Moneda
    }
    await getIntelisis.requestIntelisis(productUrl, bodyParams).then(data =>{
      if(!data.Message){
        return res.json(data);
      }
      return res.status(402).json(data);
    }); 
  } catch (error) {
    console.log(error);
  }
} 

exports.getImages =async(req,res)=>{
  try {
    const Articulo = req.body;
    let productUrl= "/Imagenes";
    bodyParams={
      Articulo: Articulo,
    }
    await getIntelisis.requestIntelisis(productUrl, bodyParams).then(data =>{
      if(!data.Message){
        return res.json(data);
      }
      return res.status(402).json(data);
    }); 
  } catch (error) {
    console.log(error);
  }
} 

exports.sendOrder =async(req,res)=>{
  try {
    let productUrl= "/Pedido";
    const {_id, code, shippingAddress,notes,totalProdQty, total, customer_id, payMethod, createdAt, collectionName, lastedit, shippingAddress_obj, invoice, customer, status, __v} = req.body;
    let pList=[];
    invoice.forEach(element => {
      pList.push({
        "Articulo":element["product_id"],
        "Cantidad":element["qty"],
        "Precio":element["uPrice"],
        "Unidad":"pza",
        "DescuentoLinea":null,
        "Inpuesto1":16,
        "Inpuesto2":null,
        "Inpuesto3":null,
        "DescripcionExtra":null,
        "Tipo":"",
        "Linea":"",
        "Fabricante":"",
        "Descripcion1":element["name"],
        "ClaveItenVtex":""
      });
    });
    bodyParams={
      Accion: 'REGISTRAR',
      Usuario: process.env.user,
      Empresa: 'NOVA',
      Sucursal:0,
      ID: null,
      Proyecto: '',
      Moneda: 'Pesos',
      TipoCambio: 1,
      ListaPrecio: '',
      FechaEmision: new Date(createdAt).toISOString(),
      Cliente: 'CTE9',
      Concepto: 'Ventas Clientes',
      Agente: '',
      Referencia: '',
      Observaciones: 'PEDIDO DESDE PORTAL',
      Almacen: '',
      DescuentoGlobal: null,
      detalle: pList
    }
    await getIntelisis.requestIntelisis(productUrl, bodyParams).then(data =>{
      if(!data.Message){
        return res.json(data);
      }
      return res.status(402).json(data);
    }); 
  } catch (error) {
    console.log(error);
  }
} 

exports.getInvoice =async(req,res)=>{
  try {
    let productUrl= "/Factura";
    const { Accion, Usuario, Empresa, Sucursal, ID, Proyecto, Moneda, TipoCambio, ListaPrecio, FechaEmision, Cliente, Concepto, Agente, Referencia, Observaciones, Almacen, DescuentoGlobal, detalle} = req.body;
    bodyParams={
      Accion: Accion,
      Usuario: Usuario,
      Empresa: Empresa,
      Sucursal: Sucursal,
      ID: ID,
      Proyecto: Proyecto,
      Moneda: Moneda,
      TipoCambio: TipoCambio,
      ListaPrecio: ListaPrecio,
      FechaEmision: FechaEmision,
      Cliente: Cliente,
      Concepto: Concepto,
      Agente: Agente,
      Referencia: Referencia,
      Observaciones: Observaciones,
      Almacen: Almacen,
      DescuentoGlobal: DescuentoGlobal,
      detalle: detalle
    }
    await getIntelisis.requestIntelisis(productUrl, bodyParams).then(data =>{
      if(!data.Message){
        return res.json(data);
      }
      return res.status(402).json(data);
    }); 
  } catch (error) {
    console.log(error);
  }
} 

exports.getAnnexes =async(req,res)=>{
  try {
    const { ID, Module, Ruta, files} = req.body;
    let productUrl= "/Anexos";
    bodyParams={
      ID: ID,
      Modulo: Module,
      Ruta: Ruta,
      files: files
    }
    await getIntelisis.requestIntelisis(productUrl, bodyParams).then(data =>{
      if(!data.Message){
        return res.json(data);
      }
      return res.status(402).json(data);
    }); 
  } catch (error) {
    console.log(error);
  }
} 