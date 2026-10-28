
import streamlit as st
import pandas as pd
import plotly.express as px

st.set_page_config(
    page_title="AI Digital Wellbeing",
    page_icon="🛡️",
    layout="wide"
)

# Demo data — replace with your real project data later
students = {
    "Maya Jenkins": {
        "Age": 9,
        "Class": "4",
        "Wellbeing Score": 86,
        "Screen Time": 3.4
    },
    "Leo Jenkins": {
        "Age": 12,
        "Class": "7",
        "Wellbeing Score": 78,
        "Screen Time": 4.2
    },
    "Sam Jenkins": {
        "Age": 15,
        "Class": "10",
        "Wellbeing Score": 82,
        "Screen Time": 3.8
    }
}

# Sidebar
with st.sidebar:
    st.title("🛡️ AI Wellbeing")
    st.caption("Child Safety & Mental Health Engine")
    st.divider()

    page = st.radio(
        "NAVIGATION",
        [
            "Dashboard Overview",
            "Wellbeing Analytics",
            "Children & Devices",
            "AI Content Filters",
            "AI Risk Detection",
            "Live Risk Alerts",
            "Reports",
            "Guardian Settings"
        ]
    )

    st.divider()
    st.caption("Parent Account")
    st.write("👤 Sarah Jenkins")
    st.caption("Primary Guardian")

# Shared student selector
st.title("AI Digital Wellbeing Platform")

selected_student = st.selectbox(
    "Select Student",
    list(students.keys())
)

student = students[selected_student]

st.caption(
    f"Welcome back, Sarah • Viewing {selected_student}'s profile"
)

st.divider()

if page == "Dashboard Overview":
    st.subheader("Dashboard Overview")

    c1, c2, c3, c4 = st.columns(4)

    c1.metric("Protected Students", "3")
    c2.metric("Wellbeing Score", f"{student['Wellbeing Score']}/100")
    c3.metric("Daily Screen Time", f"{student['Screen Time']} hrs")
    c4.metric("Safety Alerts", "3", delta="Demo data")

    st.subheader("Weekly Digital Activity")

    df = pd.DataFrame({
        "Day": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        "Screen Time": [2.5, 3.0, 3.4, 2.8, 3.6, 4.0, 3.2]
    })

    fig = px.area(
        df,
        x="Day",
        y="Screen Time",
        markers=True,
        title="Daily Screen Time (hours)"
    )

    fig.update_layout(
        template="plotly_white",
        yaxis_title="Hours",
        xaxis_title="Day"
    )

    st.plotly_chart(fig, use_container_width=True)

    left, right = st.columns(2)

    with left:
        st.subheader("AI Wellbeing Insight")
        st.info(
            "Review screen-time trends and maintain a "
            "balanced schedule of study, recreation and rest."
        )

    with right:
        st.subheader("Recent Safety Alerts")
        st.warning("Demo alert: Review flagged online content.")
        st.success("No additional live monitoring data connected.")

elif page == "Wellbeing Analytics":
    st.subheader("Wellbeing Analytics")
    st.metric("Current Wellbeing Score", student["Wellbeing Score"])
    st.metric("Daily Screen Time", f"{student['Screen Time']} hours")
    st.write("Weekly trends are currently illustrative demo data.")

elif page == "Children & Devices":
    st.subheader("Children & Devices")

    for name, details in students.items():
        with st.expander(name):
            st.write(f"Age: {details['Age']}")
            st.write(f"Class: {details['Class']}")
            st.write(f"Wellbeing Score: {details['Wellbeing Score']}")
            st.write(f"Screen Time: {details['Screen Time']} hours")

elif page == "AI Content Filters":
    st.subheader("AI Content Filters")
    st.write("Content filtering configuration")
    st.toggle("Enable demo content filtering", value=True)
    st.caption("This toggle is a UI demo; it does not block real content.")

elif page == "AI Risk Detection":
    st.subheader("AI Risk Detection")
    text_input = st.text_area(
        "Enter sample text to analyze",
        placeholder="Enter text for your future ML model..."
    )

    if st.button("Analyze Text"):
        if text_input.strip():
            st.info(
                "Connect your trained risk-detection model here "
                "to generate a real prediction."
            )
        else:
            st.warning("Please enter some text first.")

elif page == "Live Risk Alerts":
    st.subheader("Live Risk Alerts")
    st.info("Live alerts will appear after connecting your data source.")
    st.caption("No real-time monitoring is active in this demo.")

elif page == "Reports":
    st.subheader("Reports")
    st.write("Generate reports after connecting real activity data.")

    report_df = pd.DataFrame([
        {"Student": name, **details}
        for name, details in students.items()
    ])

    st.dataframe(report_df, use_container_width=True)

    st.download_button(
        "Download Demo Report (CSV)",
        report_df.to_csv(index=False),
        file_name="wellbeing_demo_report.csv",
        mime="text/csv"
    )

elif page == "Guardian Settings":
    st.subheader("Guardian Settings")

    with st.form("guardian_settings"):
        name = st.text_input("Guardian Name", "Sarah Jenkins")
        email = st.text_input("Email", "parent@example.com")
        submitted = st.form_submit_button("Save Settings")

        if submitted:
            st.success("Demo settings submitted.")
