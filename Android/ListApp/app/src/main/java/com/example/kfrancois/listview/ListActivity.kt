package com.example.kfrancois.listview

import android.app.Activity
import android.os.Bundle
import android.support.v7.widget.LinearLayoutManager
import android.support.v7.widget.RecyclerView

class ListActivity : Activity() {

    private lateinit var recyclerView: RecyclerView
    private lateinit var viewAdapter: RecyclerView.Adapter<*>
    private lateinit var viewManager: RecyclerView.LayoutManager

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_list)

        val dataset = getPeople(2000)

        viewManager = LinearLayoutManager(this)
        viewAdapter = MyAdapter(dataset)

        recyclerView = findViewById<RecyclerView>(R.id.my_list_view).apply {
            layoutManager = viewManager
            adapter = viewAdapter
        }
    }
}
