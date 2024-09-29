<template>
    <section class="p-1">
        <div class="col-12 p-4" style="overflow: scroll;">
            <h1 class="fw-bold" style="position: sticky; left: 0;">Transactions</h1>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Date Requested</th>
                        <th scope="col">Request Type</th>
                        <th scope="col">Purpose</th>
                        <th scope="col">Status</th>
                        <th scope="col">Date Released</th>
                        <th scope="col">Released To</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">09/21/2024</th>
                        <td>Transcript of Records</td>
                        <td>Local Employment</td>
                        <td><span class="badge text-bg-danger">Pending</span> | <span class="badge text-bg-danger">Unpaid</span></td>
                        <td>00/00/0000</td>
                        <td></td>
                    </tr>
                    <tr>
                        <th scope="row">09/23/2024</th>
                        <td>Certifications</td>
                        <td>For Promotion</td>
                        <td><span class="badge text-bg-success">Released </span> | <span class="badge text-bg-success">Paid</span></td>
                        <td>09/24/2024</td>
                        <td>Requestee</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </section>
</template>