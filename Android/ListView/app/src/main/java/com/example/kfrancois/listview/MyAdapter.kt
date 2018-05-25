package com.example.kfrancois.listview

import android.support.v7.widget.RecyclerView
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.RelativeLayout
import android.widget.TextView

class MyAdapter(private val dataset: Array<Person>) : RecyclerView.Adapter<MyAdapter.ViewHolder>() {


    class ViewHolder(view: View) : RecyclerView.ViewHolder(view) {
        var name: TextView = view.findViewById(R.id.name)
        var gender: TextView

        init {
            gender = view.findViewById(R.id.gender)
        }

    }

    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): MyAdapter.ViewHolder {
        val listElement = LayoutInflater.from(parent.context).inflate(R.layout.list_element, parent, false) as RelativeLayout

        return ViewHolder(listElement)
    }

    override fun onBindViewHolder(holder: ViewHolder, position: Int) {
        val person = dataset[position]

        holder.name.text = "Name: " + person.name
        holder.gender.text = "Gender: " + person.gender
    }

    override fun getItemCount() = dataset.size
}