﻿// <auto-generated />
using System;
using Gallería.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace Gallería.Migrations
{
    [DbContext(typeof(ApplicationDBContext))]
    [Migration("20201014002148_addNullableIdTipoGallo")]
    partial class addNullableIdTipoGallo
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .UseIdentityColumns()
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("ProductVersion", "5.0.0-rc.1.20451.13");

            modelBuilder.Entity("Gallería.Models.Gallo", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .UseIdentityColumn();

                    b.Property<string>("Alias")
                        .HasColumnType("nvarchar(max)");

                    b.Property<DateTime>("FechaNacimiento")
                        .HasColumnType("datetime2");

                    b.Property<int?>("Id_TipoGallo")
                        .HasColumnType("int");

                    b.Property<string>("Matricula")
                        .IsRequired()
                        .HasMaxLength(50)
                        .HasColumnType("nvarchar(50)");

                    b.HasKey("Id");

                    b.HasIndex("Id_TipoGallo");

                    b.ToTable("Gallo");
                });

            modelBuilder.Entity("Gallería.Models.TipoGallo", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .UseIdentityColumn();

                    b.Property<string>("Descripcion")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("TipoGallo");
                });

            modelBuilder.Entity("Gallería.Models.Gallo", b =>
                {
                    b.HasOne("Gallería.Models.TipoGallo", "TipoGallo")
                        .WithMany("Gallos")
                        .HasForeignKey("Id_TipoGallo");

                    b.Navigation("TipoGallo");
                });

            modelBuilder.Entity("Gallería.Models.TipoGallo", b =>
                {
                    b.Navigation("Gallos");
                });
#pragma warning restore 612, 618
        }
    }
}
