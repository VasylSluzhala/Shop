//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace ReactTemplate.WebAPI.Models
{
    using System;
    using System.Collections.Generic;
    
    public partial class Product
    {
        public System.Guid Id { get; set; }
        public string Name { get; set; }
        public double Price { get; set; }
        public Nullable<double> OldPrice { get; set; }
        public bool IsNew { get; set; }
    }
}
